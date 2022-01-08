import { query as q } from 'faunadb';
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
    subscriptionID: string,
    customerID: string
) {
    const userRef = await fauna.query(
        q.Select(
            "ref", 
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerID
                )
            )
        )
    );

    const subscription = await stripe.subscriptions.retrieve(subscriptionID);
    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id, // Tenho somente um produto, portanto não tem problema de fixar o indice
    }

    await fauna.query(
        q.Create(
            q.Collection('subscriptions'),
            {data: subscriptionData}
        )
    )

    console.log(subscriptionID, customerID);
    // Buscar o usuário no FaunaDB usando o customerId (stripe_customer_id no FaunaDB)
    // Salvar os dados da subscription no FaunaDB
}
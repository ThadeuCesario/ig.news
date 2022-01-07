import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";

export default async(request: NextApiRequest, response: NextApiResponse) => {
    if(request.method === 'POST'){
        const session = await getSession({req: request});

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,
            // metadata
        })

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id, //id do customer registrado no stripe
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price: 'price_1JeVGZAKWcP9Cx1v6bo28VwZ',
                    quantity: 1
                },
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })

        return response.status(200).json({sessionId: stripeCheckoutSession.id});
    }
    else {
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method not allowed');
    }
}
import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

const SubscribeButton = () => {
    const {data: session} = useSession(); 

    async function handleSubscribe(){
        if(!session){
            signIn('github');
            return;
        }

        //criação da checkout session
        try{
            const response = await api.post('/subscribe');
            const {sessionId} = response.data;
            const stripe = await getStripeJs();
            await stripe.redirectToCheckout({sessionId});
        }catch(err){
            console.error(err);
        }
    }

    return (
        <button 
            type="button" 
            className={styles.subscribeButton}
            onClick={handleSubscribe}    
        >
            Subscribe now
        </button>
    )
}

export default SubscribeButton;
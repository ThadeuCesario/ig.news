import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss';

const SubscribeButton = () => {
    const [session]: any = useSession();

    function handleSubscribe(){
        if(!session){
            signIn('github');
            return;
        }

        //criação da checkout session

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
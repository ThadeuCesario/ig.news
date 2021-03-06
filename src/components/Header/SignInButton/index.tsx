import {FaGithub} from 'react-icons/fa';
import {signIn, signOut, useSession} from 'next-auth/react'
import {FiX} from 'react-icons/fi';
import styles from './styles.module.scss'; 

const SignInButton = () => {
    const {data: session} = useSession(); 

    return session ? (
        (
            <button 
                className={styles.signInButton} 
                type="button"
                onClick={() => signOut()}
            >
                <FaGithub color="#04d361" />
                {session.user.name}
                <FiX color="#737380" className={styles.closeIcon}/>
            </button>
        )
    ) : (
        (
            <button 
                className={styles.signInButton} 
                type="button"
                onClick={() => signIn('github')}
            >
                <FaGithub color="#eba417" />
                Sing in with Github
            </button>
        )
    )
}

export default SignInButton;
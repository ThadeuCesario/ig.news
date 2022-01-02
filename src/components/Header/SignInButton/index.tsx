import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import styles from './styles.module.scss'; 

const SignInButton = () => {
    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        (
            <button className={styles.signInButton} type="button">
                <FaGithub color="#04d361" />
                Thadeu Cesário
                <FiX color="#737380" className={styles.closeIcon}/>
            </button>
        )
    ) : (
        (
            <button className={styles.signInButton} type="button">
                <FaGithub color="#eba417" />
                Sing in with Github
            </button>
        )
    )
}

export default SignInButton;
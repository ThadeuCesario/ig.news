import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import styles from './styles.module.scss';

const SignInButton = () => {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.SigInButtonContainer}
        >
            <FaGithub color="#04d361"/>
            Thadeu Munhóz Cesário
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
        type="button"
        className={styles.SigInButtonContainer}
    >
        <FaGithub color="#eba417"/>
        Sign in with Github
    </button>
    )
}

export default SignInButton;
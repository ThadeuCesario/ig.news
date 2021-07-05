import styles from '../styles/home.module.scss'
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
    <title>Início | IgNews</title>
    </Head>
    <h1 className={styles.title}>
      Hello <span>World</span>
    </h1>
    </>
  )
}
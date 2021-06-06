import styles from '../styles/Home.module.css'

import Head from 'next/head'

const AppHead = () =>
    <Head>
        <title className={styles.title}>tweetwatch</title>
        <link rel="icon" href="/favicon.svg" />
    </Head>

export default AppHead
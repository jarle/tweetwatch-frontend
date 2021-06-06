import Link from 'next/link'
import styles from '../styles/Home.module.css'

const AppHeader = () =>
    <Link className={styles.title} href="/">
        <a>
            <h1 className={styles.title}> tweetwatch </h1>
        </a>
    </Link>

export default AppHeader
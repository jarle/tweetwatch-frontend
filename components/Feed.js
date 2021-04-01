import styles from '../styles/Home.module.css'

import AppHead from '../components/AppHead'
import AppHeader from '../components/AppHeader'
import TweetCard from '../components/TweetCard'
import { tweetscore } from '../lib/utils'

function TweetFeed({ tweets }) {
    return tweets
        .data
        .sort(
            (a, b) => tweetscore(b) - tweetscore(a)
        )
        .slice(0, 25)
        .map(TweetCard)
}

export default function Feed({ tweets }) {
    return (
        <div className={styles.container}>
            <AppHead />

            <main className={styles.main}>
                <AppHeader />

                <p className={styles.description}>
                    Generated {tweets.date}
                </p>

                <div className={styles.grid}>
                    <TweetFeed tweets={tweets} className={styles.grid} />
                </div>
            </main>
        </div>
    )

}
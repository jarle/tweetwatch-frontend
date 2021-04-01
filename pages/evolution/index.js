import styles from '../../styles/Home.module.css'

import AppHead from '../../components/AppHead'
import AppHeader from '../../components/AppHeader'
import TweetCard from '../../components/TweetCard'
import { tweetscore } from '../../lib/utils'

const BASE_URL = "https://us-central1-tweetwatch-309410.cloudfunctions.net/app/api/collections/"
const COLLECTION = `evolution/`
const FILE = `evolution-${"2021-04-01"}.json`

const FULL_URL = BASE_URL + COLLECTION + FILE

export async function getStaticProps() {
  const res = await fetch(FULL_URL)
  const tweets = await res.json()

  return {
    props: {
      tweets,
    },
  }
}

function Feed({ tweets }) {
  return tweets
    .data
    .sort(
      (a, b) => tweetscore(b) - tweetscore(a)
    )
    .slice(0, 25)
    .map(TweetCard)
}


export default function Home({ tweets }) {
  return (
    <div className={styles.container}>
      <AppHead />

      <main className={styles.main}>
        <AppHeader />

        <p className={styles.description}>
          The most popular $EVO tweets from the last 7 days
        </p>

        <div className={styles.grid}>
          <Feed tweets={tweets} className={styles.grid} />
        </div>
      </main>
    </div>
  )
}

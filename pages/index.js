import Link from 'next/link'
import styles from '../styles/Home.module.css'

import AppHead from '../components/AppHead'
import AppHeader from '../components/AppHeader'

export default function Home() {
  return (
    <div className={styles.container}>
      <AppHead />

      <main className={styles.main}>
        <AppHeader />

        <p className={styles.description}>
          The most popular tweets from the last 7 days
        </p>

        <div className={styles.grid}>
          {
            [
              ["/amazon", "$AMZN"],
              ["/cloudflare", "$NET"],
              ["/crowdstrike", "$CRWD"],
              ["/embracer", "$EMBRAC"],
              ["/evolution", "$EVO // $EVVTY"],
              ["/finanstwitter", "#finanstwitter"],
              ["/kambi", "$KAMBI"],
              ["/pexip", "$PEXIP"],
              ["/plejd", "$PLEJD"],
              ["/sea", "$SE"],
              ["/shopify", "$SHOP"],
              ["/square", "$SQ"],
            ]
              .map(
                ([url, tags]) =>
                  <Link href={url}>
                    <a>
                      <div className={styles.cashtagcard}>
                        <p>{tags}</p>
                      </div>
                    </a>
                  </Link>
              )
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          Created by <a href='https://twitter.com/jarlemathiesen' target="_blank">@jarlemathiesen</a>
        </div>
      </footer>
    </div>
  )
}

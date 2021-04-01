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
              ["/evolution", "$EVO // $EVVTY"],
              ["/kambi", "$KAMBI"]
            ]
              .map(
                ([url, tags]) =>
                  <Link href={url}>
                    <a>
                      <div className={styles.card}>
                        <p>{tags}</p>
                      </div>
                    </a>
                  </Link>
              )
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <p>I'm a footer!</p>
      </footer>
    </div>
  )
}

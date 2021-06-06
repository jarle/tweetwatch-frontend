import styles from '../styles/Home.module.css'
import { tweetscore } from '../lib/utils'

export default function TweetCard(tweet) {
    const media = tweet.photos.length > 0 ? tweet.photos
        .map(
            photoURL => <img key={photoURL} src={photoURL} />
        ) : <img src={tweet.thumbnail} />

    return <a href={tweet.link} target="_blank"> <div className={[styles.card, styles.tweet].join(' ')} key={tweet.conversation_id}>
        <div>
            <a href={`https://twitter.com/${tweet.username}`} target="_blank">
                <span className={styles.strongText}>{tweet.name}</span> <span className={styles.weakText}>@{tweet.username}</span>
            </a>
        </div>
        <div className={styles.weakText}>{tweet.date}</div>

        <div className={styles.tweetContent}>
            <p>
                {
                    tweet.tweet
                        // .replace(/https:\/\/t.co\/[^\s]+/, "")
                        // .replace(/\s?\$[^\s]+\s?/, " ")
                        .replace(/#/, "")
                }
            </p>
        </div>

        {
            tweet.quote_url || (tweet.urls && tweet.urls.length > 0) ?
                <div className={styles.tweetLinks}>
                    {
                        [].concat(
                            tweet.quote_url || tweet.urls
                        )
                            .map(
                                url => <div>
                                    <a href={url} target="_blank">{url.slice(0, 50)}...</a>
                                    <br />
                                </div>
                            )
                    }
                    <br />
                </div>
                : null
        }

        {media}

        <div>♥ {tweet.likes_count} 🔄 {tweet.retweets_count} 🗨 {tweet.replies_count}</div>
        <div className={styles.weakText}>tweetscore {tweetscore(tweet)}</div>
    </div>
    </a>
}
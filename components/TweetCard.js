import styles from '../styles/Home.module.css'
import { tweetscore } from '../lib/utils'

export default function TweetCard(tweet) {
    const media = tweet.photos.length > 0 ? tweet.photos
        .map(
            photoURL => <img key={photoURL} src={photoURL} />
        ) : <img src={tweet.thumbnail} />

    return <a href={tweet.link} target="_blank">
        <div className={styles.card} key={tweet.conversation_id}>
            <h4>{tweet.name} @{tweet.username}</h4>
            <div>{tweet.date}</div>

            <p>{tweet.tweet}</p>
            {media}

            <div>
                <div>♥ {tweet.likes_count} 🔄 {tweet.retweets_count} 🗨 {tweet.replies_count}</div>
                <div>tweetscore {tweetscore(tweet)}</div>
            </div>
        </div>
    </a>
}
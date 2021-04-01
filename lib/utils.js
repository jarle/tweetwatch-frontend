export const BASE_URL = "https://us-central1-tweetwatch-309410.cloudfunctions.net/app/api/collections/"

export function tweetscore(tweet) {
    return (5 * tweet.retweets_count + 3 * tweet.replies_count + tweet.likes_count)
}
export async function getStaticProps(fullUrl) {
    const res = await fetch(fullUrl)
    const tweets = await res.json()

    return {
        props: {
            tweets,
        },
    }
}

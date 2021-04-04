export const BASE_URL = "https://us-central1-tweetwatch-309410.cloudfunctions.net/app/api/collections/"

export function tweetscore(tweet) {
    const postedDate = new Date(tweet.date)
    const currentDate = new Date()
    const tweetAge = (currentDate.getTime() - postedDate.getTime()) / (1000 * 60 * 60 * 24)
    const timeFactor = (
        1 + (1 / (0.1 + Math.exp(5 * (tweetAge - 4))))
    )

    const cashtagThreshold = 1
    const hashtagThreshold = 4

    const relevancy = (tweet.cashtags.length) > 0 ?
        (cashtagThreshold - (tweet.cashtags.length - 1)) / cashtagThreshold :
        1

    const hashtagRelevancy = (tweet.hashtags.length) > 0 ?
        (hashtagThreshold - (tweet.hashtags.length - 1)) / hashtagThreshold :
        1

    return Math.floor(
        relevancy * hashtagRelevancy * timeFactor * (10 * tweet.retweets_count + 3 * tweet.replies_count + tweet.likes_count)
    )
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


export function tweetscore(tweet) {
    return (5 * tweet.retweets_count + 3 * tweet.replies_count + tweet.likes_count)
}
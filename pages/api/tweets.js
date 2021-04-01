// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as tweets from './tweets-parsed.json'

export default (req, res) => {
  res
    .status(200)
    .json({ tweets })
}

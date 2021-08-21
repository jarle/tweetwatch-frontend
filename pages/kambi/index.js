import Feed from '../../components/Feed'
import { BASE_URL, getStaticProps as gsp } from '../../lib/utils'

const COLLECTION = "kambi"

export async function getStaticProps() {
  const FULL_URL = BASE_URL + COLLECTION + "/latest.json"
  return gsp(FULL_URL)
}


export default function Home({ tweets }) {
  return (
    <Feed tweets={tweets} />
  )
}

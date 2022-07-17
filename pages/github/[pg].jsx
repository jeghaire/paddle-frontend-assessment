import { Nav, RepoList } from '../../components'
import Head from 'next/head'
import { getAllReposData } from '../../lib/repos'

export default function Home({ allReposData }) {
  const repos = allReposData?.items?.map(item => ({
    id: item.id,
    name: item.name,
    desc: item.description,
    issues: item.open_issues_count,
    owner: item.owner.login,
    image: item.owner.avatar_url,
    stars: item.stargazers_count,
    date: item.pushed_at,
  }))

  return (
    <>
      <Head>
        <title>Github's Trending Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav colored={true} />
      <RepoList repos={repos} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { pg } = context.query
  const allReposData = await getAllReposData(pg)
  return {
    props: {
      allReposData
    }
  }
}


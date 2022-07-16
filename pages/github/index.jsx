import { Nav } from '../../components'
import Head from 'next/head'
import { getAllReposData } from '../../lib/repos'

export default function Home({ allReposData, allReposData2 }) {
  return (
    <>
      <Head>
        <title>Metricks Pre Launch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav colored={true} />
      <div className="text-4xl font-medium text-center">Github</div>
      <div className="grid grid-cols-auto-fill auto-rows-fr place-content-center justify-items-stretch justify-center gap-4 px-2 md:px-24 w-fit sm:w-full mx-auto">
        {/* {allReposData.map(repoData => <RepoInfoCard key={repoData.alpha3Code} {...repoData} />)} */}
        {/* {allReposData.length === 0 && (<h1 className="font-medium text-center">No results to show</h1>)} */}
        <>
          {allReposData.items?.map((item, idx) => (
            <div>
              <p>{idx + 1}</p>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.open_issues_count}</p>
              <p>{item.owner.login}</p>
              <p>{item.owner.avatar_url}</p>
              <p>{item.stargazers_count}</p>
            </div>
          ))}
        </>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allReposData = await getAllReposData(1)
  const allReposData2 = await getAllReposData(2)
  return {
    props: {
      allReposData,
      allReposData2
    }
  }
}


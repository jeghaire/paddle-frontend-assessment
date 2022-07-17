import { getAllReposIds, getRepoData } from '../../../lib/repos'

export default function Home({ repoData }) {
  return (
    <>
      <pre>{repoData?.items?.name}</pre>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getAllReposIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: id }) {
  const repoData = await getRepoData(id)
  return {
    props: {
      repoData
    }
  }
}
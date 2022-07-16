export async function getAllReposData(page = 1) {
  const fetchRepos = await fetch(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`,
    {
      headers: {
        'accept': 'application/vnd.github+json',
      }
    })
  const repos = await fetchRepos.json()
  return repos
}

export async function getAllReposIds() {
  const repos = await getAllReposData()
  return repos.items?.map(({ id }) => {
    return {
      params: { id }
    }
  })
}

export async function getRepoData({ id }) {
  const fetchRepoData = await fetch(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&id=${id}`)
  const repoData = await fetchRepoData.json()
  return repoData
}
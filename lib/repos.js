export async function getAllReposData(page) {
  const fetchRepos = await fetch(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`,
    {
      headers: {
        'accept': 'application/vnd.github+json',
      }
    })

  const repos = await fetchRepos.json()
  const reposFiltered = repos?.items?.map(item => ({
    id: item.id,
    name: item.name,
    desc: item.description,
    issues: item.open_issues_count,
    owner: item.owner.login,
    image: item.owner.avatar_url,
    stars: item.stargazers_count,
    date: item.pushed_at,
  }))

  return reposFiltered
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
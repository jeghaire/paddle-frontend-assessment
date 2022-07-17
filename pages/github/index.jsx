import { Nav, RepoList } from '../../components'
import Head from 'next/head'
import { getAllReposData } from '../../lib/repos'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [pg, setPg] = useState(1)
  const [repos, setRepos] = useState([])
  const [prevY, setPrevY] = useState(0)
  const [loading, setLoading] = useState(false)
  const loadingRef = useRef(null)

  async function getReposData(page) {
    setLoading(true)
    const allReposData = await getAllReposData(page)
    setLoading(false)
    return allReposData
  }

  useEffect(() => {
    getReposData(pg).then(data => setRepos(data))
    setPg(2)

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    let observer = new IntersectionObserver(
      handleObserver.bind(this),
      options
    );
    // let target = document.querySelector('#loader')
    // observer.observe(target)

    observer.observe(loadingRef.current)

  }, [])

  function handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (prevY > y) {
      setPg(prevPg => prevPg + 1)
      // const newRepos = getReposData(pg)
      // setRepos(prevRepos => [...prevRepos, ...newRepos])
    }
    setPrevY(y)
  }

  return (
    <>
      <Head>
        <title>Github's Trending Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav colored={true} />
      <RepoList repos={repos} />
      <p id="loader" ref={loadingRef} className={`${loading ? 'visible' : 'invisible'} text-center p-12 text-sm`}>loading..</p>
    </>
  )
}
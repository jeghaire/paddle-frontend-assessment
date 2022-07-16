import { getAllCountriesIds, getCountryData } from '../../lib/repos'

export default function Home({ countryData }) {
  return (
    <>
      <pre>{countryData[0]?.name?.common}</pre>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getAllCountriesIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: id }) {
  const countryData = await getCountryData(id)
  return {
    props: {
      countryData
    }
  }
}
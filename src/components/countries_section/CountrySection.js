import React, { useContext, useEffect } from 'react'
import SearchInput from './country_elements/SearchInput'
import styled from 'styled-components'
import Country from './country_elements/Country'
import GithubContext from '../../context/github/githubContext'

const AllCountries = styled.section`
  
  width: calc(100% - 6rem);
  margin: auto;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.3rem, 1fr));
  gap: 3rem;
`

const CountrySection = () => {

  
  const githubContext = useContext(GithubContext);

  
  // console.log(githubContext.countriesArr);
  // const [filterState, setFilterState] = useState([]);
  // const [filterText, setFilterText] = useState('')

  
  useEffect(() => {
    githubContext.getCountryInfo()
    filterCountries()
    // eslint-disable-next-line 
  }, [githubContext.filterText]); 


  // const currentSearch = (text) => {
  //   setFilterText(text)
  // }

  // const regionByFilter = (theRegion) => {
  //   setFilterText(theRegion)
  // }


  const filterCountries = () => {
    let newArr = githubContext.countriesArr.filter(country => {
      const regex = new RegExp(githubContext.filterText, 'gi')
      return country.name.match(regex) || country.region.match(regex);
    })
    githubContext.setFilterState(newArr)
  }
    

  return (
    <>
    <SearchInput />
    <AllCountries>
      {githubContext.filterArr.length !== null ? githubContext.filterArr.map(country => 
        <Country key={country.id} countryInfo={country}  />
      ) : githubContext.countriesArr.map(country => 
        <Country key={country.id} countryInfo={country}  />
      ) }

    </AllCountries>
    </>
  )
}

export default CountrySection

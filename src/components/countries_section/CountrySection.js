import React, { useEffect, useState } from 'react'
import SearchInput from './country_elements/SearchInput'
import styled from 'styled-components'
import Country from './country_elements/Country'

const AllCountries = styled.section`
  
  width: calc(100% - 6rem);
  margin: auto;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.3rem, 1fr));
  gap: 3rem;
`

const CountrySection = ({ getCountryInfo, countriesArr, singleCountryItem }) => {

  const [filterState, setFilterState] = useState([]);
  const [filterText, setFilterText] = useState([])

  
  useEffect(() => {
    getCountryInfo()
    filterCountries()
    // eslint-disable-next-line 
  }, [filterText]);


  const currentSearch = (text) => {
    setFilterText(text)
  }

  const filterCountries = () => {
    let newArr = countriesArr.filter(country => {
      const regex = new RegExp(filterText, 'gi')
      return country.name.match(regex) || country.region.match(regex);
    })
    setFilterState(newArr)
    console.log(filterState);
  }
    

  return (
    <>
    <SearchInput currentSearch={currentSearch} />
    <AllCountries>
      {filterState.length !== null ? filterState.map(country => 
        <Country key={country.id} countryInfo={country} singleCountryItem={singleCountryItem} />
      ) : countriesArr.map(country => 
        <Country key={country.id} countryInfo={country} singleCountryItem={singleCountryItem} />
      ) }

    </AllCountries>
    </>
  )
}

export default CountrySection

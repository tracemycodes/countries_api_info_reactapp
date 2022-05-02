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

const CountrySection = ({ getCountryInfo, countriesArr }) => {

  
  useEffect(() => {
    getCountryInfo()
    // es-lint 
  }, []);
  
  
  const [ singleCountry, setSingleCountry ] = useState({});

  const singleCountryItem = (nation) => {
    setSingleCountry(nation)
    console.log(singleCountry);
  }

  return (
    <>
    <SearchInput/>
    <AllCountries>
      {countriesArr.map(country => 
        <Country key={country.id} countryInfo={country} singleCountryItem={singleCountryItem} />
      )}

    </AllCountries>
    </>
  )
}

export default CountrySection

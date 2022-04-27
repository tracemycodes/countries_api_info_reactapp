import React from 'react'
import SearchInput from './country_elements/SearchInput'
import styled from 'styled-components'
import Country from './country_elements/Country'

const AllCountries = styled.section`
  
  width: calc(100% - 6rem);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.3rem, 1fr));
  gap: 3rem;
  border: 1px solid green;
`

const CountrySection = () => {
  return (
    <>
    <SearchInput/>
    <AllCountries>
      <Country/>
      <Country/>
      <Country/>

    </AllCountries>
    </>
  )
}

export default CountrySection

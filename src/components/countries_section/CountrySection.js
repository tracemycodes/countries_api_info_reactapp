import React from 'react'
import RegionFilter from './country_elements/RegionFilter'
import SearchInput from './country_elements/SearchInput'

const CountrySection = () => {
  return (
    <div>
      <SearchInput/>
      <RegionFilter/>
    </div>
  )
}

export default CountrySection

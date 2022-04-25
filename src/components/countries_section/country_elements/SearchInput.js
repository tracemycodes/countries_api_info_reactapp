import React, { useState } from 'react'
import styled from 'styled-components'
import RegionFilter from './RegionFilter'


const MyForm = styled.form`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3rem;
  margin: 1.7rem 0;
`

const SearchInput = () => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }


  return (
    <MyForm>
      <form>
          <input type="text" name="text" placeholder="Search for a country" className="searchInput" onChange={onChange} />       
      </form>
      <RegionFilter/>
    </MyForm>
  )
}

export default SearchInput

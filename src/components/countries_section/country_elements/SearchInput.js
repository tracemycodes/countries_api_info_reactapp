import React, { useState } from 'react'
import styled from 'styled-components'
import RegionFilter from './RegionFilter'


const MyForm = styled.form`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3rem;
  margin: 1.7rem 0;

  input[type='text'] {
  max-width: 18.5rem;
  width: 90%;
  padding: 0.65rem 2rem;
  font-size: 0.7rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: hsl(209, 23%, 22%);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-image: url(../images/search.svg);
  background-size: 0.8rem;
  background-repeat: no-repeat;
  background-position: 0.5rem;
  color: #fff;
  }
  @media (max-width: 34.6875rem) {
    flex-direction: column;
    align-items: flex-start;
    display: block;
    width: 100%;

    input {
    margin-bottom: 1.5rem;
    }
  }
`

const SearchInput = ({ currentSearch, regionByFilter }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
    currentSearch(text)
  }


  return (
    <MyForm>
          <input type="text" name="text" placeholder="Search for a country" className="searchInput" onChange={onChange} />       
      
      <RegionFilter regionByFilter={regionByFilter} />
    </MyForm>
  )
}

export default SearchInput

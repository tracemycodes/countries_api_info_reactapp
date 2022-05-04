import React, { useState } from 'react';
import styled from 'styled-components';

const SelectDiv = styled.ul`
  position: relative;
  font-family: Arial;
  width: 8rem;
  background-color: hsl(209, 23%, 22%);
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.4rem 0.8rem;
  font-size: 0.7rem;
  cursor: pointer;
  list-style: none;

  .select-div {
    position: absolute;
    background-color: hsl(209, 23%, 22%);
    list-style: none;
    color: #fff;
    top: 105%;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .select-option {
    list-style: none;
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  
`;

const RegionFilter = () => {
  const [selectText, setSelectText] = useState('');
  const [modal, setModal] = useState(false);


  const innerOption = (e) => {
    setSelectText(e.target.innerText)
    setModal(false)
    e.preventDefault()
  }

  const handleModal = (e) => {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }




  return (
    <>
      <SelectDiv>
        <li className='select-header' onClick={handleModal}> {selectText !== '' ? selectText : 'Filter by region'} </li>

        {modal && 
        <ul className='select-div'>
          <li className='select-option' value="Africa" onClick={innerOption} >All</li>
          <li className='select-option' value="Africa" onClick={innerOption} >Africa</li>
          <li className='select-option' value="America" onClick={innerOption} >America</li>
          <li className='select-option' value="Asia" onClick={innerOption} >Asia</li>
          <li className='select-option' value="Europe" onClick={innerOption} >Europe</li>
          <li className='select-option' value="Oceania" onClick={innerOption} >Oceania</li>
        </ul>
        }

        
      </SelectDiv>
    </>
  );
};

export default RegionFilter;

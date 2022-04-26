import React, { useState } from 'react';
import styled from 'styled-components';

const SelectDiv = styled.div`
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

  .select-div {
    position: absolute;
    background-color: hsl(209, 23%, 22%);
    color: #fff;
    top: 105%;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .select-option {
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


  return (
    <>
      <SelectDiv>
        <div className='select-header'>{selectText === '' ? "Filter By Region" : {selectText} }</div>
        <div className='select-div'>
          <p className='select-option' value="Africa"  >Africa</p>
          <p className='select-option' value="America"  >America</p>
          <p className='select-option' value="Asia"  >Asia</p>
          <p className='select-option' value="Europe" >Europe</p>
          <p className='select-option' value="Oceania" >Oceania</p>
        </div>
      </SelectDiv>
    </>
  );
};

export default RegionFilter;

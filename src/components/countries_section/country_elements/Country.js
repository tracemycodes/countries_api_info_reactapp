import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CountryDetails = styled.div`
  background-color: hsl(209, 23%, 22%);
  border-radius: 6px;
  color: #fff;
  padding-bottom: 1rem;
  letter-spacing: 0.07rem;
  line-height: 1rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  h2 {
    font-size: 0.85rem;
    margin: 0.8rem;
  }

  p {
    font-size: 0.7rem;
    margin: 0.3rem 0.8rem 0.3rem 0.8rem;
    margin-bottom: 0.3rem;
  }

  .flag {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    height: 8.2rem;
    margin-bottom: 1.2rem;
  }

  .flag img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Country = ({ countryInfo, singleCountryItem }) => {
  const {flag, name, population, region, capital} = countryInfo;
  const [presentCountry, setPresentCountry] = useState({})

  const onClick = (nation) => {
    setPresentCountry({many: 'fish'})
    singleCountryItem(countryInfo)
  }

  return (
    <CountryDetails>
      <Link to={`/country/${name}`} onClick={(e) => onClick(countryInfo)}>      
      <div className='flag'>
        <img src={flag} alt='' />
      </div>
      <h2 className='country'>{name}</h2>
      <p className='population'>
        <strong>population:</strong> {population}
      </p>
      <p className='Region'>
        <strong>Region:</strong> {region}
      </p>
      <p className='Capital'>
        <strong>Capital:</strong> {capital}
      </p>
      </Link>
    </CountryDetails>
  );
};

export default Country;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import GithubContext from '../../../context/github/githubContext';

const CountryDetails = styled.div`
  background-color: ${ ( { theme } ) => theme.header };
  border-radius: 6px;
  color: ${ ( { theme } ) => theme.text };
  padding-bottom: .4rem;
  letter-spacing: 0.07rem;
  line-height: 1rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  a {
    color: ${ ( { theme } ) => theme.text };
    text-decoration: none;
  }

  h2 {
    font-size: 0.85rem;
    margin: 0.6rem;
  }

  p {
    font-size: 0.7rem;
    margin: 0.2rem 0.6rem 0.2rem 0.6rem;
  }

  .flag {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    height: 7.5rem;
    margin-bottom: 1rem;
  }

  .flag img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Country = ({ countryInfo }) => {
  const {flag, name, population, region, capital} = countryInfo;
  const githubContext = useContext(GithubContext);

  const { singleCountryItem } = githubContext;


  const onClick = (nation) => {
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

Country.prototype = {
  countryInfo: PropTypes.object.isRequired,
}

export default Country;

import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const SingleCountrySection = Styled.section`
  position: absolute;
  top: 4rem;
  left: 3rem;
  width: calc(100% - 6rem);
  height: calc(100vh - 4rem);
  z-index: 2;
  display: none;
  background-color: hsl(207, 26%, 17%);

  button {
  padding: .5rem 2rem;
  margin: 1rem 0 2rem;
  box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.fa-solid {
  margin-right: .75rem;
}
.single-flag {
  max-width: 46.6875rem;
  width: 100%;
  height: 18rem;box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
}
.single-flag img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
}
.single-country-details .fl-left *+*,
.single-country-details .fl-right *+* {
  margin-top: .6rem;
}
`

const SingleCountry = ({ presentCountry }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = presentCountry;

  return (
    <div>
      <button className='home-page'>
        <Link to={`/`}>
          <i className='fa-solid fa-left-long' /> Back
        </Link>
      </button>
      <div gd-2=''>
        <article className='single-country-flag'>
          <div className='single-flag'>
            <img src={flag} alt='' />
          </div>
        </article>
        <article className='single-country-details'>
          <h2 className='country single-name'>{name}</h2>
          <div className='fl-left'>
            <p className='native-name'>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p className='single-population'>
              <strong>population:</strong> {population}
            </p>
            <p className='single-region'>
              <strong>Region:</strong> {region}
            </p>
            <p className='sub-region'>
              <strong>Region:</strong> {subregion}
            </p>
            <p className='single-capital'>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
          <div className='fl-right'>
            <p className='single-domain'>
              <strong>Top Level Domain:</strong> {topLevelDomain[0].slice(1)}
            </p>
            <p className='single-currencies'>
              <strong>Currencies:</strong>{' '}
              {currencies !== undefined
                ? currencies.map((currency) => currency.name)
                : `No currency used`}
            </p>
            <p className='single-languages'>
              <strong>Languages:</strong>{' '}
              {languages.map((language) => language.name)}
            </p>
          </div>
          <div className='fl-down'>
            <p>Border Countries</p>
            <div>
              {borders !== undefined
                ? borders.map((border) => <span>{border}</span>)
                : `No neighbouring country`}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleCountry;

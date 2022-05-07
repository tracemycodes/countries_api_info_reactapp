import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GithubContext from '../../context/github/githubContext';

const CountryDetails = styled.div`

  position: absolute;
  top: 4rem;
  left: 3rem;
  width: calc(100% - 6rem);
  height: calc(100vh - 4rem);
  background-color: hsl(207, 26%, 17%);
}
 
  button {
  padding: .5rem 2rem;
  margin: 1rem 0 2rem;
  box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
  background-color: hsl(209, 23%, 22%);
  border: none;
  color: #fff;
  cursor: pointer;

    .fa-solid {
    margin-right: .75rem;
    }
  }
 
  .single-flag {
    max-width: 46.6875rem;
    width: 100%;
    box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);

      img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
    }
  }

  > div {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  align-content: center;
  gap: 2rem;
}

 article {
  box-shadow: unset;

  h2 {
  font-size: 0.85rem;
  margin-bottom: 0.8rem;
  }

  p {
  font-size: 0.7rem;
  margin: 0.3rem 0.8rem 0.3rem 0.8rem;
  margin-bottom: 0.3rem;
  }
}
 

.single-country-details .fl-left *+*,
.single-country-details .fl-right *+* {
  margin-top: .6rem;
}
.single-country-details{
  color: #fff;

  p{ 
    margin: unset;
    font-size: .8rem;
  }

  h2 {
    margin: unset;
    font-size: 1rem;
    font-weight: bold;
  }

  .fl-left, .fl-right {
    margin-top: 1.4rem;
  }
  .fl-down p {
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 1rem;
  }
  .fl-down {
    padding: unset;
    margin: 1.4rem 0;
  }
  .fl-down span {
    margin-right: .3rem;
    font-size: .8rem;
    padding: .25rem .4rem;
    border: 1px solid hsl(206, 12%, 78%);
    border-radius: 3px;
  }
  @media (min-width: 825px) {
    .single-country-display>div {
    gap: 7rem;
    }
    .fl-left {
      float: left;
    }

    .fl-right {
      float: right;
    }

    .fl-down {
      clear: both;
      padding-top: 2rem;
    }

    .fl-down p {
      display: inline;
      margin-right: 1rem;
    }

    .fl-down div {
      display: inline;
    }
  }
}


@media (min-width: 966px) {
  >div {
    gap: 7rem;
  }
}


`;

const SingleCountry = () => {
  const githubContext = useContext(GithubContext);

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
  } = githubContext.presentCountry;

  return (
    <CountryDetails>
        <Link to={`/`}>
          <button className='home-page'>
              <i className='fa-solid fa-left-long' /> Back
          </button>
        </Link>
      <div>
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
    </CountryDetails>
  );
};

export default SingleCountry;

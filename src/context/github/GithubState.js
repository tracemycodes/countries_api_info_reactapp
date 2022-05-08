import React, { useReducer } from 'react'
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  LOAD_COUNTRIES,
  FILTER_COUNTRY,
  SEARCH_COUNTRY,
  SINGLE_COUNTRY,
  TOGGLE_THEME
} from '../types';

const GithubState = (props) => {
  const initialState = {
    countriesArr: [],
    presentCountry: {},
    filterText: '',
    filterArr: [],
    theme: 'dark'
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Load countries from rest api
  const getCountryInfo = async () => {
    const countryResponse = await fetch('https://restcountries.com/v2/all'),
      countryData = await countryResponse.json();

    // setCountriesArr(countryData);
    dispatch({
      type: LOAD_COUNTRIES,
      payload: countryData
    });
  };

  // search through list of countries
  const currentSearch = (text) => {
    dispatch({
      type: SEARCH_COUNTRY,
      payload: text

    })
  }

  // setFilter through list of countries
  const setFilterState = (newArr) => {
    dispatch({
      type: FILTER_COUNTRY,
      payload: newArr
    })
  }

  // single country component
  const singleCountryItem = (nation) => {
    dispatch({
      type: SINGLE_COUNTRY,
      payload: nation
    })
  }

  const toggleTheme = (theme) => {
    dispatch({
      type: TOGGLE_THEME,
      payload: theme
    })
  }

  return <GithubContext.Provider
    value={{
      countriesArr: state.countriesArr,
      presentCountry: state.presentCountry,
      filterText: state.filterText,
      filterArr: state.filterArr,
      theme: state.theme,
      getCountryInfo,
      singleCountryItem,
      currentSearch,
      setFilterState,
      toggleTheme
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState

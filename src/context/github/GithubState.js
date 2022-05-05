import React, { useReducer } from 'react'
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  FILTER_COUNTRY,
  SEARCH_COUNTRY,
  SINGLE_COUNTRY
} from '../types';

const GithubState = (props) => {
  const initialState = {
    countriesArr: [],
    presentCountry: {},
    filterText: '',
    filterArr: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Load countries from rest api

  // filter through list of countries

  // single country component

  return <GithubContext.Provider
    value={{
      countriesArr: state.countriesArr,
      presentCountry: state.presentCountry,
      filterText: state.filterText,
      filterArr: state.filterArr
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState

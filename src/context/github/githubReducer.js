import {
  LOAD_COUNTRIES,
  FILTER_COUNTRY,
  SEARCH_COUNTRY,
  SINGLE_COUNTRY,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        countriesArr: action.payload,
      };
    case SINGLE_COUNTRY:
      return {
        ...state,
        presentCountry: action.payload,
      };
      case SEARCH_COUNTRY:
      return {
        ...state,
        filterText: action.payload,
      }
      case FILTER_COUNTRY:
      return {
        ...state,
        filterArr: action.payload,
      }
    default:

      return state;
    
  }
};
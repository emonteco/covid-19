import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  SELECT_COUNTRY,
} from './types';

export function getCountriesRequest() {
  return {
    type: GET_COUNTRIES_REQUEST,
  };
}

export function getCountriesSuccess(data) {
  return {
    type: GET_COUNTRIES_SUCCESS,
    data,
  };
}

export function getCountriesFailure(error) {
  return {
    type: GET_COUNTRIES_FAILURE,
    error,
  };
}

export function selectCountry(country) {
  return {
    type: SELECT_COUNTRY,
    country,
  };
}

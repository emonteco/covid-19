import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
} from './types';
import { API } from '../../constants';

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

export function getCountries() {
  return async (dispatch) => {
    dispatch(getCountriesRequest());
    try {
      const response = await fetch(`${API}/countries`);
      if (response.status >= 300) {
        throw response.status;
      } else {
        const data = await response.json();
        const countries = [
          {},
          ...data.countries,
        ];
        dispatch(getCountriesSuccess(countries));
      }
    } catch (error) {
      dispatch(getCountriesFailure(error));
    }
  };
}

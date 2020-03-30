import { API } from '../constants';

export const getRequest = (path = '') => {
  const url = `${API}${path}`;

  return fetch(url).then((response) => {
    if (response.ok) {
      if (response.status === 204) {
        return true;
      }
      return response.json();
    }

    throw new Error(`API request failed: ${url}`);
  });
};

export const getWorldStats = () => getRequest();

export const getCountries = () => getRequest('countries');

export const getCountryStats = (country) => getRequest(`countries/${country}`);

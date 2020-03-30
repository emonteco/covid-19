import {
  GET_WORLD_STATS_REQUEST,
  GET_WORLD_STATS_SUCCESS,
  GET_WORLD_STATS_FAILURE,
  GET_COUNTRY_STATS_REQUEST,
  GET_COUNTRY_STATS_SUCCESS,
  GET_COUNTRY_STATS_FAILURE,
} from './types';

export function getWorldStatsRequest() {
  return {
    type: GET_WORLD_STATS_REQUEST,
  };
}

export function getWorldStatsSuccess(data) {
  return {
    type: GET_WORLD_STATS_SUCCESS,
    data,
  };
}

export function getWorldStatsFailure(error) {
  return {
    type: GET_WORLD_STATS_FAILURE,
    error,
  };
}

export function getCountryStatsRequest(country) {
  return {
    type: GET_COUNTRY_STATS_REQUEST,
    country,
  };
}

export function getCountryStatsSuccess(data) {
  return {
    type: GET_COUNTRY_STATS_SUCCESS,
    data,
  };
}

export function getCountryStatsFailure(error) {
  return {
    type: GET_COUNTRY_STATS_FAILURE,
    error,
  };
}

import {
  GET_WORLD_STATS_REQUEST,
  GET_WORLD_STATS_SUCCESS,
  GET_WORLD_STATS_FAILURE,
} from './types';
import { API } from '../../constants';

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

export function getWorldStats() {
  return async (dispatch) => {
    dispatch(getWorldStatsRequest());
    try {
      const response = await fetch(API);
      if (response.status >= 300) {
        throw response.status;
      } else {
        const data = await response.json();
        dispatch(getWorldStatsSuccess(data));
      }
    } catch (error) {
      dispatch(getWorldStatsFailure(error));
    }
  };
}

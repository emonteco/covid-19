import {
  GET_WORLD_STATS_REQUEST,
  GET_WORLD_STATS_SUCCESS,
  GET_WORLD_STATS_FAILURE,
  GET_COUNTRY_STATS_REQUEST,
  GET_COUNTRY_STATS_SUCCESS,
  GET_COUNTRY_STATS_FAILURE,
} from './types';

const initialState = {
  loadingWorldStats: false,
  loadingCountryStats: false,
  world: {},
  country: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORLD_STATS_REQUEST: {
      return {
        ...state,
        loadingWorldStats: true,
      };
    }

    case GET_WORLD_STATS_SUCCESS: {
      return {
        ...state,
        loadingWorldStats: false,
        world: action.data,
      };
    }

    case GET_WORLD_STATS_FAILURE: {
      return {
        ...state,
        loadingWorldStats: false,
        error: action.error,
      };
    }

    case GET_COUNTRY_STATS_REQUEST: {
      return {
        ...state,
        country: {},
        loadingCountryStats: true,
      };
    }

    case GET_COUNTRY_STATS_SUCCESS: {
      return {
        ...state,
        loadingCountryStats: false,
        country: action.data,
      };
    }

    case GET_COUNTRY_STATS_FAILURE: {
      return {
        ...state,
        loadingCountryStats: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
}

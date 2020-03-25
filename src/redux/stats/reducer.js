import {
  GET_WORLD_STATS_REQUEST,
  GET_WORLD_STATS_SUCCESS,
  GET_WORLD_STATS_FAILURE,
  GET_COUNTRIES_STATS_REQUEST,
  GET_COUNTRIES_STATS_SUCCESS,
  GET_COUNTRIES_STATS_FAILURE,
} from './types';

const initialState = {
  loadingWorldStats: false,
  loadingCountriesStats: false,
  world: {},
  countries: [],
};

export default function profile(state = initialState, action) {
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

    case GET_COUNTRIES_STATS_REQUEST: {
      return {
        ...state,
        loadingCountriesStats: true,
      };
    }

    case GET_COUNTRIES_STATS_SUCCESS: {
      return {
        ...state,
        loadingCountriesStats: false,
        countries: action.data,
      };
    }

    case GET_COUNTRIES_STATS_FAILURE: {
      return {
        ...state,
        loadingCountriesStats: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
}

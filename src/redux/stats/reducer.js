import {
  GET_WORLD_STATS_REQUEST,
  GET_WORLD_STATS_SUCCESS,
  GET_WORLD_STATS_FAILURE,
} from './types';

const initialState = {
  loading: false,
  world: {},
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case GET_WORLD_STATS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_WORLD_STATS_SUCCESS: {
      return {
        ...state,
        loading: false,
        world: action.data,
      };
    }

    case GET_WORLD_STATS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
}

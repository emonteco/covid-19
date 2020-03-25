import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
} from './types';

const initialState = {
  loading: false,
  list: [],
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_COUNTRIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.data,
      };
    }

    case GET_COUNTRIES_FAILURE: {
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

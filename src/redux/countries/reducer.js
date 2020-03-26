import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  SELECT_COUNTRY,
} from './types';

const initialState = {
  loading: false,
  list: [],
  selected: null,
};

export default function reducer(state = initialState, action) {
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

    case SELECT_COUNTRY: {
      return {
        ...state,
        selected: action.country,
      };
    }

    default:
      return state;
  }
}

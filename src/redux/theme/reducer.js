import {
  TOGGLE_THEME,
} from './types';

const initialState = {
  darkTheme: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    }

    default:
      return state;
  }
}

import produce from 'immer';

export const Types = {
  REQUEST_MOVIES: '@auth/REQUEST_MOVIES',
  REQUEST_SUCCESS: '@auth/REQUEST_SUCCESS',
  REQUEST_FAILURE: '@auth/REQUEST_FAILURE',
};

const INITIAL_STATE = {
  movies: null,
  loading: false,
};

export default function movies (state = INITIAL_STATE , action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.REQUEST_MOVIES: {
        draft.loading = true;
        break;
      }
      case Types.REQUEST_SUCCESS: {
        draft.movies = action.payload.movies;
        draft.loading = false;
        break;
      }
      case Types.REQUEST_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
};

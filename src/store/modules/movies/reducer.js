import produce from 'immer';

export const Types = {
  REQUEST_MOVIES: '@movies/REQUEST_MOVIES',
  REQUEST_SUCCESS: '@movies/REQUEST_SUCCESS',
  REQUEST_FAILURE: '@movies/REQUEST_FAILURE',
};

const INITIAL_STATE = {
  data: null,
  meta: null,
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
        const { results, ...meta } = action.payload.movies;

        draft.data = results;
        draft.meta = meta;
        // draft.data = action.payload.movies;
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

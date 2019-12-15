import produce from 'immer';

export const Types = {
  REQUEST_MOVIE: '@movie/REQUEST_MOVIE',
  REQUEST_SUCCESS: '@movie/REQUEST_SUCCESS',
  REQUEST_FAILURE: '@movie/REQUEST_FAILURE',
};

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default function movie (state = INITIAL_STATE , action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.REQUEST_MOVIE: {
        draft.loading = true;
        break;
      }
      case Types.REQUEST_SUCCESS: {
        draft.data = action.payload.movie;
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

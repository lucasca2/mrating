import { Types } from './reducer';

export function requestMovies() {
  return {
    type: Types.REQUEST_MOVIES,
  }
}

export function requestSuccess({ movies }) {
  return {
    type: Types.REQUEST_SUCCESS,
    payload: { movies },
  }
}

export function requestFailure() {
  return {
    type: Types.REQUEST_FAILURE,
  }
}

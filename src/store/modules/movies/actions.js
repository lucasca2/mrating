import { Types } from './reducer';

export function requestMovies({ page, search }) {
  return {
    type: Types.REQUEST_MOVIES,
    payload: { page, search }
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

import { Types } from './reducer';

export function requestMovie({ id }) {
  return {
    type: Types.REQUEST_MOVIE,
    payload: { id }
  }
}

export function requestSuccess({ movie }) {
  return {
    type: Types.REQUEST_SUCCESS,
    payload: { movie },
  }
}

export function requestFailure() {
  return {
    type: Types.REQUEST_FAILURE,
  }
}

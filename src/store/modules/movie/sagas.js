import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Types } from './reducer';

// Actions
import {
  requestFailure,
  requestSuccess
} from "./actions";

// Services
import movieService from 'services/movie';

export function* requestMovie({ payload }) {
  const { id } = payload;
  try {
      const movie = yield call(movieService.getById, id);


    yield put(requestSuccess({ movie }));
  } catch (err) {
    yield put(requestFailure());
  }
}


export default all([
  takeLatest(Types.REQUEST_MOVIE, requestMovie),
]);

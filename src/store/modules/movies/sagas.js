import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Types } from './reducer';

// Actions
import {
  requestFailure,
  requestSuccess
} from "./actions";

// Services
import movieService from 'services/movie';

export function* requestMovies({ payload }) {
  const { page, search } = payload;
  try {
    let movies;
    if(search) {
      movies = yield call(movieService.searchMovie, search, { page });
    } else {
      movies = yield call(movieService.get, { page });
    }


    yield put(requestSuccess({ movies }));
  } catch (err) {
    yield put(requestFailure());
  }
}


export default all([
  takeLatest(Types.REQUEST_MOVIES, requestMovies),
]);

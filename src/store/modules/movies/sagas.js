import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Types } from './reducer';

// Services
import history from 'services/history';

export function* requestMovies({ payload }) {

}


export default all([
  takeLatest(Types.REQUEST_MOVIES, requestMovies),
]);

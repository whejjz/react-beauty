import {fork,call} from 'redux-saga/effects'

import { watchStartLogin } from './components/login/sage'

export default function* rootSaga() {
  yield [
    fork(watchStartLogin)
  ];
}
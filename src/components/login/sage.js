import { put, take, call, fork } from 'redux-saga/effects'
import * as LoginType from './actionTypes'
import * as action from './actions'
import { get } from '../../fetchApi/index'

function* startLogin(url) {
  try {
    let response =  yield call(get, url)
    console.log(response)
  } catch (error) {
    console.log('网络故障'+error);
  }finally {
    console.log('其他');
  }
}


export function* watchStartLogin() {
  while (true) {
    let request = yield take(LoginType.START_LOGIN);
    yield fork(startLogin, request.url);
  }
}

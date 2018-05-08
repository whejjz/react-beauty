import * as actionTypes from './actionTypes'

export function startLogin(url) {
  return {
    type:actionTypes.START_LOGIN,
    url
  }
}

export function loginSuccess(data) {
    return {
        type:actionTypes.RES_LOGIN,
        data
    }
}
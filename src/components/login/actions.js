import * as actionTypes from './actionTypes'

export function startLogin(url) {
  return {
    type:actionTypes.START_LOGIN,
    url
  }
}
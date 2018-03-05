import * as actionTypes from './actionTypes'
import {combineReducers} from 'redux'

function resolveADData(state=[],action) {
  console.log(action, 3)
  switch (action.type){
    case actionTypes.START_LOGIN:
      return action.url;
    default :
      return state
  }
}
function resolveULikeData(state=[],action) {
  switch (action.type){
    case actionTypes.RES_LOGIN:
      return [...state,...action.data];
    default :
      return state
  }
}

const rootReducer = combineReducers({
  adData:resolveADData,
  guessULike:resolveULikeData
});

export default rootReducer
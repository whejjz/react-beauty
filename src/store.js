import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSagas'

const win = window

const sagaMiddleware = createSagaMiddleware()
const middlewares = []

const storeEnhancers = compose(
  applyMiddleware(...middlewares, sagaMiddleware),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

export default (initialSate = {}) => {
  const store = createStore(
    rootReducer,
    initialSate,
    storeEnhancers
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept( () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  sagaMiddleware.run(rootSaga)
  return store;
}
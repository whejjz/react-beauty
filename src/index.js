import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RootRouter from './rootRoute'
import rootStore from './store'

const store = rootStore();

const mountNode = document.getElementById('app');
render(
  <Provider store = { store }>
    <RootRouter />
  </Provider>,
  mountNode
);
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
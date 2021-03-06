/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
// import { browserHistory } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
window.store = store;//makes getstate() available as window.store.getState() in browser console

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);


render (
  <AppContainer>
    <Root store={store} />
  </AppContainer>
  ,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

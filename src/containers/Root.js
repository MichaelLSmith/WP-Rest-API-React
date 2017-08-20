import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';

import App from '../containers/App';
import HomePage from '../containers/HomePage';
import PageA from '../components/PageA';
import NotFoundPage from '../components/NotFoundPage';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  // history: PropTypes.object.isRequired
};

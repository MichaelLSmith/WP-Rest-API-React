import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// import routes from '../routes';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';

import App from './App';
import HomePage from '../containers/HomePage';
import PageA from './PageA';
import NotFoundPage from './NotFoundPage';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="/page-a" component={PageA} />
            <Route path="*" component={NotFoundPage}/>
          </Route> */}
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

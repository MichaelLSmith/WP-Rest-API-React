import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, IndexLink, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Header from '../containers/Header';

import Home from '../components/Home';
import PageA from '../components/PageA';
import PageB from '../components/PageB';


import { fetchPages } from '../actions/actions';

import 'font-awesome/css/font-awesome.min.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }
  buildRoutes(pages) {
    const templates = {
      'page-a': PageA,
      'page-b': PageB
    }
    // console.log('pages in buildRoutes:',pages)
    return pages.map( (page, i) => {
      return (
          <Route
            key={i}
            component={templates[page.slug]}
            path={`/${page.slug}`}
            exact
          />
      );
    })
  }
  render() {
    const { pages } = this.props.content;
    if(pages) {
      return (
      <BrowserRouter>
        <div className="app-container container">
          <Header />
          <Switch>
            <Route path="/" component={ Home } exact />
            {this.buildRoutes(pages)}
          </Switch>
          {this.props.children}
        </div>
      </BrowserRouter>
      );
    }
    else {
      return <div>No data loaded</div>
    }
  }
}
App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchPages })(App);

// export default App;

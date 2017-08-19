import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, IndexLink, Route } from 'react-router-dom';

import Header from '../containers/Header';
import PageA from '../components/PageA';

import { fetchPages } from '../actions/actions';

import 'bulma/css/bulma.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }
  buildRoutes(data) {
    // console.log('data in buildRoutes:',data)
    return data.map( (page, i) => {
      return (
        <Route
          key={i}
          component={PageA}
          path={`/${page.slug}`}
          exact
        />
      );
    })
  }
  render() {
    console.log(window.store.getState());
    const { data } = this.props.content;
    console.log('menus in APP.js', this.props.menus.data);
    if(data) {
      return (
        <div>
          <Header />

          {this.buildRoutes(data)}
          {this.props.children}
        </div>
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

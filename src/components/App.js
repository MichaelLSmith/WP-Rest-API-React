import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

import { fetchPages } from '../actions/actions';

import 'bulma/css/bulma.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }
  render() {
    console.log(window.store.getState());
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/page-a">Page A</Link>
        <br/>
        {this.props.children}
      </div>
    );
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, IndexLink, Route, Switch } from 'react-router-dom';

import Header from '../containers/Header';
import PageA from '../components/PageA';

import { fetchPages } from '../actions/actions';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }
  buildRoutes(pages) {
    // console.log('pages in buildRoutes:',pages)
    return pages.map( (page, i) => {
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
    const { pages } = this.props.content;
    if(pages) {
      return (
        <div>
          <Header />
          <Switch>
            {this.buildRoutes(pages)}
          </Switch>
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

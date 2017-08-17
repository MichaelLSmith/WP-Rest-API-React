import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPages } from '../actions/actions';

class HomePage extends Component {
  fetchPagesHandler() {
    this.props.fetchPages();
  }
  render() {
    return (
    <div>
      <p>This is the hardcoded home page. It will be replaced by data from the WP API</p>
      <button type="button" >Get Pages</button>
    </div>
    );
  };
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchPages })(HomePage);

// export default HomePage;

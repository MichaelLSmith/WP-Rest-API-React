import React, { Component } from 'react';
import { connect } from 'react-redux';

//want to map through pages data, and retrieve page based on slug

class PageA extends Component {
  render() {
    console.log('pagea props',this.props);
    return (
        <div>
          <p>This is hardcoded page a</p>
        </div>
    );
  };
}

function mapStateToProps(state) {
  return { state }

}

export default connect(mapStateToProps)(PageA);

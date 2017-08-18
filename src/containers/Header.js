import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class Header extends Component {
  render() {
    console.log('header this.props:',this.props);
    let allPages = this.props.content.data;
    allPages = _.sortBy(allPages, [function(page) {return page.menu_order}]);
    return (
      <div className="Header">
        {
          allPages.map((page) => {
            if(page.slug != 'home') {
              return (
                <Link
                  key={page.id}
                  to={`/${page.slug}`}
                  style={{marginRight: '10px'}}
                >
                  {page.title.rendered}
                </Link>
              )
            }
        })
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);

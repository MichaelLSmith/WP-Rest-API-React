import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus, fetchHeaderOptions } from '../actions/actions';

import Banner from '../components/Banner-img';
import NavMain from '../components/navigation/Nav-Main';

class Header extends Component {
  componentDidMount() {
    this.props.fetchMenus('176');
    this.props.fetchHeaderOptions();
  }
  render() {
    if(this.props.headerMenu && this.props.headerOptions) {
      const { headerMenu: {items}, headerOptions: {acf} } = this.props;
      return (
        <div className="Header">
          <Banner img={acf.banner_image.sizes.large} />
          <NavMain
            logo={acf.site_logo}
            items={items}
          />
        </div>
      )
    }
    else { return <div>Header Loading...</div>  }
  }
}

function mapStateToProps(state) {
  return state.structure;
}

export default connect(mapStateToProps, { fetchMenus, fetchHeaderOptions } )(Header);

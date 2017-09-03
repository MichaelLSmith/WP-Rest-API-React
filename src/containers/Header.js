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
      console.log('banner: ',acf.banner_image);
      return (
        <div className="Header">
          <NavMain
            logo={acf.site_logo}
            items={items}
          />
          <Banner img={acf.banner_image.url} />
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

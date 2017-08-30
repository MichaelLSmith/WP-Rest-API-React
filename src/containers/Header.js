import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus, fetchHeaderOptions } from '../actions/actions';
// import NavItemDropdown from '../components/navigation/NavItem-dropdown';
// import NavItem from '../components/navigation/NavItem';

import Banner from '../components/Banner-img';
import NavMain from '../components/navigation/Nav-Main';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false}
    this.handleMobileClick = this.handleMobileClick.bind(this);
  }
  handleMobileClick(el) {
    this.setState(prevState => ({isToggled: !prevState.isToggled}));
  }
  componentDidMount() {
    this.props.fetchMenus('176');
    this.props.fetchHeaderOptions();
  }
  render() {
    const toggleHamburgerClass =
      "navbar-burger burger "
      + (this.state.isToggled ? 'is-active' : null);
    const toggleMenuClass =
      "navbar-menu "
      + (this.state.isToggled ? 'is-active' : null);

    console.log('this.props in Header', this.props);
    if(this.props.headerMenu && this.props.headerOptions) {
      const { headerMenu: {items}, headerOptions: {acf} } = this.props;
      return (
        <div className="Header">

          <Banner img={acf.banner_image.sizes.large} />
          <NavMain
            handleClick={this.handleMobileClick}
            toggleHamburgerClass={toggleHamburgerClass}
            toggleMenuClass={toggleMenuClass}
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

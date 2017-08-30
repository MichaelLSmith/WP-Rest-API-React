import React, { Component } from 'react';
import NavBrand from './Nav-Brand';
import NavItemDropdown from './NavItem-dropdown';
import NavItem from './Nav-Item';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false}
    this.handleMobileClick = this.handleMobileClick.bind(this);
  }
  handleMobileClick(el) {
    this.setState(prevState => ({isToggled: !prevState.isToggled}));
  }
  render() {
    const toggleHamburgerClass =
      "navbar-burger burger "
      + (this.state.isToggled ? 'is-active' : null);
    const toggleMenuClass =
      "navbar-menu "
      + (this.state.isToggled ? 'is-active' : null);
    return (
    <nav className="navbar">
      <NavBrand
        logo={this.props.logo}
        handleClick={this.handleMobileClick}
        toggleHamburgerClass = {toggleHamburgerClass}
      />
      <div id="navMenu-header" className={toggleMenuClass}>
        <div className="navbar-start">
          {this.props.items
            .map( (item) => {
              if(item.children) {
                return <NavItemDropdown item={item} key={item.id}/>
              }
              else { return <NavItem item={item} key={item.id} /> }
            })
          }
        </div>
      </div>
    </nav>
  )};
}
export default NavMain;

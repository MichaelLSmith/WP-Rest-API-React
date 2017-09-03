import React, { Component } from 'react';
import NavBrand from './Nav-Brand';
import NavItemDropdown from './NavItem-dropdown';
import NavItem from './Nav-Item';
import SocialLink from './Social-Link';

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
      <div className="container">
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
            <div className="navbar-end">
              <SocialLink
                view="is-hidden-desktop-only"
                url="https://michaellsmith.github.io/"
                color="#333"
                icon="fa fa-github"
              />
              <SocialLink
                view="is-hidden-desktop-only"
                url="https://linkedin.com/in/michaellaurencesmith"
                color="#0077b5"
                icon="fa fa-linkedin"
              />
              <SocialLink
                view="is-hidden-desktop-only"
                url="https://twitter.com/mlsmith45"
                color="#55acee"
                icon="fa fa-twitter"
              />
              <div className="navbar-item is-hidden-desktop-only">
                <a className="button is-info">Call To Action</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )};
}
export default NavMain;

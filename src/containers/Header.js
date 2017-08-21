import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus, fetchHeaderOptions } from '../actions/actions';
import NavItemDropdown from '../components/navigation/NavItem-dropdown';
import NavItem from '../components/navigation/NavItem';

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
          {/* <img src= alt=""/> */}

          <nav className="navbar">
            <NavBrand
              logo={acf.site_logo}
              handleClick={this.handleMobileClick}
              toggleHamburgerClass = {toggleHamburgerClass}
            />
            <div id="navMenu-header" className={toggleMenuClass}>
              <div className="navbar-start">
                {items
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
        </div>
      )
    }
    else { return <div>Header Loading...</div>  }
  }
}

const NavBrand = props => {
  return (
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src='http://via.placeholder.com/75x75' alt="site logo"/>
      </Link>
      <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
          <span className="icon" style={{color: "#333"}}>
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a
          className="navbar-item is-hidden-desktop"
          href="https://twitter.com/jgthms" target="_blank"
        >
          <span className="icon" style={{color: "#55acee"}}>
            <i className="fa fa-twitter"></i>
          </span>
        </a>
        <div
          className={props.toggleHamburgerClass}
          data-target="navMenu-header"
          onClick={(el) => props.handleClick(el)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  );
}

function mapStateToProps(state) {
  return state.structure;
}

export default connect(mapStateToProps, { fetchMenus, fetchHeaderOptions } )(Header);

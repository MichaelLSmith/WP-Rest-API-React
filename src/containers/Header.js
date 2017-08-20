import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus, fetchHeaderOptions } from '../actions/actions';
import NavBarDropdown from '../components/NavBar/NavBar-Dropdown';
import _ from 'lodash';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false}
    this.handleMobileClick = this.handleMobileClick.bind(this);
  }
  handleMobileClick(el) {
    setState({isToggled=true})
  }
  componentDidMount() {
    this.props.fetchMenus('176');
    this.props.fetchHeaderOptions();
  }
  render() {
    console.log('header this.props:', this.props);
    const toggleHamburgerClass =
      "navbar-burger burger "
      + (this.state.isToggled ? 'is-active' : null);
    const { items, acf } = this.props;
    if(items && acf) {
      return (
        <div className="Header">

          <nav className="navbar">
            <NavBrand
              logo={acf.site_logo}
              handleClick={this.handleMobileClick}
              toggleHamburgerClass = {toggleHamburgerClass}
            />

            <div id="navMenu-header" className="navbar-menu">
              <div className="navbar-start">
                {items
                  .map( (item) => {
                    console.log('item.children:',item.children);
                    if(item.children) {
                      return (
                        //<NavItem item={item} />
                        //<NavBarDropdown item={item.chi} />
                        <div className="navbar-item has-dropdown is-hoverable" key={item.id}>
                          <Link
                              // key={item.id}
                              to={`/${item.object_slug}`}
                              style={{marginRight: '10px'}}
                              className="navbar-link"
                            >
                              {item.title}
                          </Link>
                          <NavBarDropdown children={item.children} />
                        </div>
                      )
                    }
                    else {
                      return (
                        <Link
                          key={item.id}
                          to={`/${item.object_slug}`}
                          style={{marginRight: '10px'}}
                          className="navbar-item"

                        >
                          {item.title}
                        </Link>
                    )}
                })}
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
    console.log('props in NavBrand', props);

    return (
      <div className="navbar-brand">
        <Link to="/">
          <img src='http://via.placeholder.com/75x75' alt="site logo"/>
        </Link>
        <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span className="icon" style={{color: "#333"}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className={props.toggleHamburgerClass}
            href="https://twitter.com/jgthms" target="_blank"
          >
            <span className="icon" style={{color: "#55acee"}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>

          <div
            className="navbar-burger burger"
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

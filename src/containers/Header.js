import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus, fetchHeaderOptions } from '../actions/actions';
// import { NavBar } from '../components/NavBar/NavBar';
import _ from 'lodash';

class Header extends Component {
  componentDidMount() {
    this.props.fetchMenus('176');
    this.props.fetchHeaderOptions();
  }
  render() {
    console.log('header this.props:', this.props);
    const { items, acf } = this.props;
    console.log('acf in header', acf);
    if(items && acf) {
      return (
        <div className="Header">

          <nav className="navbar">
            <NavBrand logo={acf.site_logo} />
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">

              </div>
            {
              items
                .map( (item) => {
                  console.log(item.children);
                  if(item.children) {
                    return (
                      //<NavItem item={item} />
                      //<NavBarDropdown item={item.chi} />
                      <div className="navbar-item has-dropdown is-hoverable">
                        <Link
                            key={item.id}
                            to={`/${item.object_slug}`}
                            style={{marginRight: '10px'}}
                            className="navbar-item"
                          >
                            {item.title}
                        </Link>
                        <div className="navbar-dropdown">

                        </div>
                      </div>
                    )
                  }
                  else {
                    return (
                      <Link
                        key={item.id}
                        to={`/${item.object_slug}`}
                        style={{marginRight: '10px'}}
                      >
                        {item.title}
                      </Link>
                    )}

                })
            }
            </div>
          </nav>
        </div>
      )
    }
    else { return <div>Header Loading...</div>  }
  }
}

const NavBrand = (props) => {
  console.log('Logo props: ', props);
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
        <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
          <span className="icon" style={{color: "#55acee"}}>
            <i className="fa fa-twitter"></i>
          </span>
        </a>

        <div className="navbar-burger burger" data-target="navMenubd-example">
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

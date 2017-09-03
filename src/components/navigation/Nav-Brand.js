import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../styled/Logo';


const NavBrand = props => {
  return (
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        {/* <img src='http://via.placeholder.com/75x75' alt="site logo"/> */}
        <Logo />
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

export default NavBrand;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../styled/Logo';
import SocialLink from './Social-Link';

const NavBrand = props => {
  return (
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <Logo />
      </Link>
      <SocialLink
        view="is-hidden-desktop"
        url="https://michaellsmith.github.io/"
        color="#333"
        icon="fa fa-github"
      />
      <SocialLink
        view="is-hidden-desktop"
        url="https://linkedin.com/in/michaellaurencesmith"
        color="#55acee"
        icon="fa fa-twitter"
      />
      <SocialLink
        view="is-hidden-desktop"
        url="https://twitter.com/mlsmith45"
        color="#55acee"
        icon="fa fa-twitter"
      />

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

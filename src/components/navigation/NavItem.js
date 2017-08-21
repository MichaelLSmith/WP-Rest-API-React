import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const {item} = props;
  return (
    <Link
      to={`/${item.object_slug}`}
      style={{marginRight: '10px'}}
      className="navbar-item"
    >
      {item.title}
    </Link>
  )
}
export default NavItem;

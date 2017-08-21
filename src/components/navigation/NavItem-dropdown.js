import React from 'react';
import { Link } from 'react-router-dom';

import DropdownItem from './DropdownItem';


const NavItemDropdown = (props) => {
  const {item} = props;
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <Link
          to={`/${item.object_slug}`}
          style={{marginRight: '10px'}}
          className="navbar-link"
        >
          {item.title}
      </Link>
      <DropdownItem children={item.children} />
    </div>
  )

}

export default NavItemDropdown;

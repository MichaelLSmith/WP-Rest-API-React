import React from 'react';
import { Link } from 'react-router-dom';

function NavBarDropdown(props) {
  console.log('props.children in NavBarDropdown:',props.children);
  return (
    <div className="navbar-dropdown">
      {props.children.map( child => {
        return (
          <Link
            key={child.id}
            to={`/${child.object_slug}`}
            className="navbar-item"
          >
            {child.title}
          </Link>
        )
      })}
    </div>
  );
}

export default NavBarDropdown;

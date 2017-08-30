import React from 'react';
import NavBrand from './Nav-Brand';
import NavItemDropdown from './NavItem-dropdown';
import NavItem from './Nav-Item';

function NavMain(props) {
  return (
    <nav className="navbar">
      <NavBrand
        logo={props.logo}
        handleClick={props.handleMobileClick}
        toggleHamburgerClass = {props.toggleHamburgerClass}
      />
      <div id="navMenu-header" className={props.toggleMenuClass}>
        <div className="navbar-start">
          {props.items
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
  );
}
export default NavMain;

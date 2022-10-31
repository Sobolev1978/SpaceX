import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import cn from 'classnames';

const NavBarItem = ({link, activeClassName, onClose, className, wrapperClassName}) => {

  const {pathname} = useLocation()
  const {label, href} = link
  const isActive = pathname === href
  const linkClassName = cn(className, isActive && activeClassName)

  return (
    <div className={wrapperClassName}>
      <NavLink to={href}>
        <button type="button" className={linkClassName} onClick={onClose}>
          {label}
        </button>
      </NavLink>
    </div>
  );
};

export default NavBarItem;

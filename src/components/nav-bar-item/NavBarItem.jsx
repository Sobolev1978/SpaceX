import React from 'react';
import cn from "classnames";

const NavBarItem = ({label, href, className}) => {

  return (
    <a href={href} className={cn(className)}>
      {label}
    </a>
  );
};

export default NavBarItem;

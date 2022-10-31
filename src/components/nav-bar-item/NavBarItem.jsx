import React from 'react';
import cn from "classnames";

const NavBarItem = ({label, href, className, onClose}) => {

  return (
   <button type="button" onClick={onClose}>
     <a href={href} className={cn(className)}>
       {label}
     </a>
   </button>
  );
};

export default NavBarItem;

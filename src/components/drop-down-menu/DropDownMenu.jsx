import React from 'react';
import useComponentVisible from "../../hooks/useComponentVisible";
import cn from 'classnames';
import style from './DropDownMenu.module.scss';
import NavBarItem from "../nav-bar-item/NavBarItem";
import {useMenu} from "../../moks-data/useMenu";

const DropDownMenu = ({active, onClose}) => {
  const {ref, isComponentVisible} = useComponentVisible(true, 'burger', onClose);

  const links = useMenu();

  return (
    <>
      {active && <div className={style.overlay} onClick={onClose}/>}
      <div className={cn(style.dropDownMenu, active && style.showDropDown)} ref={ref}>
        {isComponentVisible && (
          <nav>
            {links.map(link => (
              <NavBarItem
                onClose={onClose}
                label={link.label}
                key={link.label}
                className={style.link}
              />
            ))}
          </nav>
        )}
      </div>
    </>

  );
};

export default DropDownMenu;

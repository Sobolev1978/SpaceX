import React from 'react';
import NavBarItem from "../nav-bar-item/NavBarItem";
import style from './NavBar.module.scss'
import {useMenu} from "../../moks-data/useMenu";

const NavBar = () => {
  const links = useMenu()

  return (
    <div className={style.sidebar}>
      <nav>
        {
          links.map(link => (
            <NavBarItem
              label={link.label}
              key={link.label}
              className={style.link}
            />
          ))
        }
      </nav>
    </div>
  );
};

export default NavBar;

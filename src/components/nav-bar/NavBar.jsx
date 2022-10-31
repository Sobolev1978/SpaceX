import React from 'react';
import {useMenu} from "../../hooks/useMenu";
import NavBarItem from "../NavBarItem/NavBarItem";
import style from './NavBar.module.scss'

const NavBar = () => {
  const links = useMenu()

  return (
    <div className={style.sidebar}>
      <nav>
        {
          links.map(link => (
            <NavBarItem
              link={link}
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

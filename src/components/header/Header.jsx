import React, {useState} from 'react';
import NavBar from "../nav-bar/NavBar";
import style from './Header.module.scss'
import Container from "../container/Container";
import Burger from "../burger/Burger";
import cn from 'classnames';
import DropDownMenu from "../drop-down-menu/DropDownMenu";
import Image from "../image/Image";
import logo from "../../assets/img/logo.png"

const Header = ({className}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <header className={cn(style.mainHeader, className)}>
      <Container>
        <div className={style.headerBlock}>
          <div className={style.logoBlock}>
            <div className={style.leftTop}></div>
            <div className={style.leftBottom}></div>
            <div className={style.rightTop}></div>
            <div className={style.rightBottom}></div>
            <Image src={logo} alt="logo"/>
          </div>
          <NavBar/>
          <div className={style.burgerBlock} onClick={() => setIsActive(!isActive)}>
            <Burger/>
          </div>
          <DropDownMenu active={isActive} onClose={handleClose}/>
        </div>
      </Container>
    </header>
  );
};

export default Header;

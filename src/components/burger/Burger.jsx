import React from 'react';
import style from './Burger.module.scss';

const Burger = () => {
  return (
    <div className={style.burger} data-auto='burger'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;

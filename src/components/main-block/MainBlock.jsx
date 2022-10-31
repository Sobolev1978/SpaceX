import React from 'react';
import Title from "../title/Title";
import style from './MainBlock.module.scss'
import Button from "../button/Button";
import InfoList from "../info-list/InfoList";

const MainBlock = () => {
  return (
    <div className={style.mainBlock}>
      <div>
        <Title className={style.title}>
          <h1>Путешествие</h1>
          <p>на красную планету</p>
        </Title>
        <div className={style.buttonBlock}>
          <div className={style.rightTop}></div>
          <div className={style.leftBottom}></div>
          <Button className={style.button}>Начать путешествие</Button>
        </div>
      </div>

      <InfoList/>
    </div>
  );
};

export default MainBlock;

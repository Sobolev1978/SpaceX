import React from 'react';
import style from './InfoList.module.scss';
import {items} from '../../moks-data/moks-data-infolist';
import InfoItem from "./info-item/InfoItem";

const InfoList = () => {
  return (
    <div className={style.innerContainer}>
      {
        items.map(item => (
          <InfoItem
            key={item.id}
            label={item.label}
            value={item.value}
            title={item.title}
            subValue={item.subValue}
          />
        ))
      }
    </div>
  );
};

export default InfoList;

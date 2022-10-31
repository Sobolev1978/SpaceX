import React from 'react';
import style from './InfoItem.module.scss';
import cn from 'classnames'

const InfoItem = ({
    label,
    value,
    title,
    className,
    subValue
  }) => {
    return ( <
        div className = {
          cn(style.content, className)
        } >
        <
        p > {
          label
        } < /p> <
        h2 > {
          value
        } {
          subValue && ( < i > {
              subValue
            } < /i>)}</h2 >
            <
            span > {
              title
            } < /span> <
            /div>
          );
        };

        export default InfoItem;
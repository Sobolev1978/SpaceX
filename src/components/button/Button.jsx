import React from 'react';
import cn from 'classnames';
import style from './Button.module.scss'

const Button = ({className, ...restProps}) => {
  return (
    <button className={cn(style.button, className)} {...restProps}/>
  );
};

export default Button;

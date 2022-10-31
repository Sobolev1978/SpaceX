import React from 'react';
import cn from 'classnames';
import styles from './Image.module.scss';

const Image = (props) => {
  const {alt, className} = props
  return (
    <img className={cn(styles.image, className)} alt={alt} {...props} />
  );
};

export default Image;

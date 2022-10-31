import React from 'react';
import cn from 'classnames';

const Title = ({children, className}) => {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
};

export default Title;

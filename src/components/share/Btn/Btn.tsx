import React, { FC, ReactChild, MouseEvent } from 'react';
import BtnBase from './Btn.styles';

interface BtnProps {
  handleClick: (event: MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  children: ReactChild;
}

const Btn: FC<BtnProps> = ({
  handleClick,
  type = 'button',
  className = '',
  primary = true,
  secondary = false,
  children,
}) => {
  const onClick = (event: MouseEvent) => {
    if (handleClick) {
      handleClick(event);
    }
  };

  return (
    <BtnBase
      variation={{ primary, secondary }}
      onClick={(event) => onClick(event)}
      type={type}
      className={`ocml-amp-btn ${className}`}
    >
      {children}
    </BtnBase>
  );
};

export default Btn;

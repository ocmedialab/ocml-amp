import React, { FC, ReactChild, MouseEvent } from 'react';
import BtnBase from './Btn.styles';

export enum BtnVariation {
  primary = 1,
  secondary = 2,
}

interface BtnProps {
  handleClick: (event: MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  primary?: boolean;
  children: ReactChild;
}

const Btn: FC<BtnProps> = ({ handleClick, type = 'button', className, primary, children }) => {
  const onClick = (event: MouseEvent) => {
    if (handleClick) {
      handleClick(event);
    }
  };

  return (
    <BtnBase
      variation={primary ? BtnVariation.primary : BtnVariation.secondary}
      onClick={(event) => onClick(event)}
      type={type}
      className={className}
    >
      {children}
    </BtnBase>
  );
};

export default Btn;

import React from 'react';
import { GuaranteedCardWrapper } from './GuaranteedStyles';

export const GuaranteedCard = ({iconName, title, description}) => {

  return (
    <GuaranteedCardWrapper>
      <span 
        className="material-symbols-outlined"
      >{iconName}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </GuaranteedCardWrapper>
  );
};

export default GuaranteedCard;

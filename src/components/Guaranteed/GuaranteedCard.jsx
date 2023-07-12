import React from 'react';
import { GuaranteedCardWrapped } from './GuaranteedStyles';

export const GuaranteedCard = ({iconName, title, description}) => {

  return (
    <GuaranteedCardWrapped>
      <span 
        className="material-symbols-outlined"
      >{iconName}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </GuaranteedCardWrapped>
  );
};

export default GuaranteedCard;

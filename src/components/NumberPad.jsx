import React from 'react';
import Number from './Number';
import Operators from './Operators';

const NumberPad = ({ onNumberClick, onOperatorClick }) => {
  return (
    <div className="flex items-center justify-center">
      <Number onClick={onNumberClick} />
      <Operators onClick={onOperatorClick} />
    </div>
  );
};

export default NumberPad;

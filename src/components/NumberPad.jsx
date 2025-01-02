import React from 'react';
import Number from './Number';
import Operators from './Operators';

const NumberPad = () => {
  return (
    <div className="flex items-center justify-center">
      <Number />
      <Operators />
    </div>
  );
};

export default NumberPad;

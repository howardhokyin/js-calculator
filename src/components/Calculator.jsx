'use client';

import React, { useState } from 'react';
import NumberPad from './NumberPad';
import Monitor from './Monitor';

const Calculator = () => {
  const [value, setValue] = useState('0');

  const handleNumberClick = (value) => {
    // console.log(value);
    setValue((pre) => pre + value);
  };

  const handleOperatorClick = (value) => {
    // console.log(value);
    setValue((pre) => pre + value);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-full max-w-md bg-slate-400">
        <Monitor value={value} />
        <NumberPad
          onNumberClick={handleNumberClick}
          onOperatorClick={handleOperatorClick}
        />
      </div>
    </div>
  );
};

export default Calculator;

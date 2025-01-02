'use client';

import React, { useState } from 'react';
import NumberPad from './NumberPad';
import Monitor from './Monitor';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleNumberClick = (number) => {
    if (number === 'reset') {
      setValue('');
      setMessage('');
      return;
    }
    setValue((prev) => prev + number);
  };

  const handleOperatorClick = (operator) => {
    if (operator === '=') {
      try {
        const result = eval(value);
        setValue(result.toString());
        setMessage('');
      } catch (error) {
        setMessage('Invalid calculation');
      }
      return;
    }

    setValue((prev) => {
      const lastChar = prev[prev.length - 1];
      if (['+', '-', '*', '/'].includes(lastChar)) {
        setMessage('Invalid input: consecutive operators');
        return prev;
      } else {
        setMessage('');
        return prev + operator;
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-full max-w-md bg-slate-400">
        <div className="text-red-600 bg-red-200">{message}</div>
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

import React from 'react';
import NumberPad from './NumberPad';
import Monitor from './Monitor';

const Calculator = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-full max-w-md bg-slate-400">
        <Monitor />
        <NumberPad />
      </div>
    </div>
  );
};

export default Calculator;

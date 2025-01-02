import React from 'react';

const Operators = ({ onClick }) => {
  return (
    <div className="grid grid-cols-1 gap-2 bg-slate-400 p-4">
      <button
        className="bg-blue-100 p-4"
        value={'+'}
        onClick={(e) => onClick(e.target.value)}
      >
        +
      </button>
      <button
        className="bg-blue-100 p-4"
        value={'-'}
        onClick={(e) => onClick(e.target.value)}
      >
        -
      </button>
      <button
        className="bg-blue-100 p-4"
        value={'*'}
        onClick={(e) => onClick(e.target.value)}
      >
        *
      </button>
      <button
        className="bg-blue-100 p-4"
        value={'/'}
        onClick={(e) => onClick(e.target.value)}
      >
        /
      </button>
    </div>
  );
};

export default Operators;

'use client';

import React from 'react';

const Number = ({ onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-slate-400 p-4">
      <button
        className="bg-blue-100 p-4"
        value={1}
        onClick={(e) => onClick(e.target.value)}
      >
        1
      </button>
      <button
        className="bg-blue-100 p-4"
        value={2}
        onClick={(e) => onClick(e.target.value)}
      >
        2
      </button>
      <button
        className="bg-blue-100 p-4"
        value={3}
        onClick={(e) => onClick(e.target.value)}
      >
        3
      </button>
      <button
        className="bg-blue-100 p-4"
        value={4}
        onClick={(e) => onClick(e.target.value)}
      >
        4
      </button>
      <button
        className="bg-blue-100 p-4"
        value={5}
        onClick={(e) => onClick(e.target.value)}
      >
        5
      </button>
      <button
        className="bg-blue-100 p-4"
        value={6}
        onClick={(e) => onClick(e.target.value)}
      >
        6
      </button>
      <button
        className="bg-blue-100 p-4"
        value={7}
        onClick={(e) => onClick(e.target.value)}
      >
        7
      </button>
      <button
        className="bg-blue-100 p-4"
        value={8}
        onClick={(e) => onClick(e.target.value)}
      >
        8
      </button>
      <button
        className="bg-blue-100 p-4"
        value={9}
        onClick={(e) => onClick(e.target.value)}
      >
        9
      </button>
      <button
        className="col-span-3 place-self-center bg-blue-100 p-4"
        value={0}
        onClick={(e) => onClick(e.target.value)}
      >
        0
      </button>
    </div>
  );
};

export default Number;

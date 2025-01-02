import React from 'react';

const Number = () => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-slate-400 p-4">
      <button className="bg-blue-100 p-4" value={1}>
        1
      </button>
      <button className="bg-blue-100 p-4">2</button>
      <button className="bg-blue-100 p-4">3</button>
      <button className="bg-blue-100 p-4">4</button>
      <button className="bg-blue-100 p-4">5</button>
      <button className="bg-blue-100 p-4">6</button>
      <button className="bg-blue-100 p-4">7</button>
      <button className="bg-blue-100 p-4">8</button>
      <button className="bg-blue-100 p-4">9</button>
      <button className="col-span-3 place-self-center bg-blue-100 p-4">
        0
      </button>
    </div>
  );
};

export default Number;

'use client';
import React, { useState } from 'react';

const Monitor = () => {
  const [number, setNumber] = useState(0);
  return <div className="flex bg-slate-300 p-4 justify-end">{number}</div>;
};

export default Monitor;

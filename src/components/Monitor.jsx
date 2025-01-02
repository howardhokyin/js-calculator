'use client';
import React, { useState } from 'react';

const Monitor = ({ value }) => {
  const [number, setNumber] = useState(0);
  return <div className="flex bg-slate-300 p-4 justify-end">{value}</div>;
};

export default Monitor;

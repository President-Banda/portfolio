'use client';
import { useState } from 'react';

export default function Home() {
  const [value, addValue] = useState(0);

  const handleValue=()=>{
    addValue(value+1);
  }

  const handleCleaar=()=>{
    addValue(0);
  }
  return (
    <div>
      <h1>I am page</h1>      
    </div>
  )
}

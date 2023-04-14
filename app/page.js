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

      <div className='text-xl grid grid-cols-6 gap-2'>
        <span className='col-start-2 col-span-2 items-center justify-start text-3xl'>
          {value}
        </span>
        <button onClick={handleCleaar} className='rounded-lg w-24 h-10 bg-red-600 m-1 row-start-2'>
          Clear
        </button>

        <button onClick={handleValue} className='rounded-lg w-24 h-10 bg-blue-600 m-1 row-start-2'>
          Add
        </button>
      </div>
      
    </div>
  )
}

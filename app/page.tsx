'use client';
import { useState } from 'react';
import Select from 'react-select';
export default function Home() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const options = [
    {
      value: 0,
      label: 'Celsius'
    },
    {
      value: 1,
      label: 'Fahrenheit'
    }
  ]
  return (
    <main className="flex min-h-screen justify-center items-center p-24">
      <div
        className="
          bg-white
          p-10
          text-2xl
          rounded-2xl
        "
      >
        <div
          className='
            text-3xl
            text-lime-900
            text-center
          '
        >
         Temperatore Convertor 
        </div>
        <input
          type="number"
          value={input}
          onChange={(e) => {
            setInput(Number(e.target.value));
          }} 
          className="
          border
          focus:border-slate-500
          mt-10
          w-full
          p-1
          "
        />
        <Select 
          options={options}
          className='mt-10' 
        />
        <Select 
          options={options}
          className='mt-5' 
        />
        <div
          className="
            border
            focus:border-slate-500
            mt-10
            w-full
            p-1
            text-center
          "
        >
          {output}          
        </div>
        <div
          className='
            text-xl
            text-center
            text-blue-950
            mt-10
          '
        >
          Copyright @ 2024 Boris Munro & Freelancer
        </div>
      </div>    
    </main>
  );
}

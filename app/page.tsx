'use client';
import { useEffect, useState } from 'react';
import Select from 'react-select';
interface Option {
  value: boolean;
  label: string;
}
export default function Home() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);
  const [isSelected, setIsSelected] = useState(true);

  const options: Option[] = [
    {
      value: true,
      label: 'Celsius'
    },
    {
      value: false,
      label: 'Fahrenheit'
    }
  ]
  useEffect(() => {
    setSelectedItem(options[0]);
  }, [])
  const calculate = () => {
    if (selectedItem?.value) {
      const out = (input * 9) / 5 + 32; // Celsius to Fahrenheit
      setOutput(out);
    } else {
      const out = ((input - 32) * 5) / 9; // Fahrenheit to Celsius
      setOutput(out);
    }
  };
  const handleCalculate = (item: Option | null) => {
    setSelectedItem(item);
    calculate();
  }
  const anotherItem = options.find(item => item.value !== selectedItem?.value);
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
            calculate();
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
          value={isSelected ? selectedItem : anotherItem}
          onChange={(item: Option | null) => {
            handleCalculate(item);
            setIsSelected(true);
          }}
          className='mt-10' 
        />
        <Select 
          options={options}
          value={!isSelected ? selectedItem : anotherItem}
          className='mt-5'
          onChange={(item: Option | null) => {
            handleCalculate(item);
            setIsSelected(false);
          }}
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

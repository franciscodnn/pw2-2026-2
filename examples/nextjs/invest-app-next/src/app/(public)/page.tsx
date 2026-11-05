'use client';

import { InvestmentCard } from '../components/InvestmentCard';
import { investments } from '@/data/data';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from "@iconify/react";

export default function Public() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  function handleClick() {
    setCount(count + 1);
    setHidden(!hidden);

    console.log(hidden);
  }

  return (
    <>
      <p>{ count }</p>
      <nav className="flex justify-end mb-6 gap-2">
        <button
          id="btnAdd"
          type="button"
          onClick={ handleClick }
          className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-3 py-2 rounded-full shadow-md transition">
          { hidden ? <Icon icon="akar-icons:eye-closed" width={24} /> 
              : <Icon icon="akar-icons:eye-open" width={24} /> 
          }
        </button>
        <button
          id="btnAdd"
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
          +
        </button>
      </nav>
      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <Link key={investment.id} href={`detalhar/${investment.id}`} className="text-sm">
            <InvestmentCard {...investment} hidden={hidden} />
          </Link>
        ))}
      </div>
    </>
  );
}
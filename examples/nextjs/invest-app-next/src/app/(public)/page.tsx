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
            { /* <InvestmentCard {...investment} hidden="teste" /> */ }

            {/* <InvestmentCard /> */}
            <div>
              <div className="relative bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">{investment.name}</h3>
                    <p className="text-lg font-semibold text-gray-700">R$ {hidden ? '*****' : Number(investment.value).toFixed(2) }</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-bold">Origem:</span> {investment.origin}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-bold">Categoria:</span> {investment.category}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-bold">Data:</span> {investment.date}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-bold">Taxa:</span> {investment.interest}
                  </p>
                </div>
                <button type="button" className="absolute bottom-4 right-4 text-gray-500 hover:text-red-700 transition" aria-label="Apagar investimento">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
            {/* End of <InvestmentCard /> */}
          </Link>
        ))}
      </div>
    </>
  );
}
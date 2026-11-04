'use client';

import { InvestmentCard } from './components/InvestmentCard';
import { investments } from '@/data/data';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from "@iconify/react";

export default function Home() {
  const [investmentsList, setInvestmentsList] = useState(investments ?? []);

  const investment = {
    id: 1,
    name: 'Tesouro Selic 2029',
    value: 100,
    origin: 'Tesouro Nacional',
    category: 'Pos',
    date: '2023-03-22',
    interest: '100% Selic',
  };

  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto">
        <header>
          <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
        </header>

        <nav className="flex justify-end mb-6 gap-2">
          <button
            id="btnAdd"
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-3 py-2 rounded-full shadow-md transition">
            <Icon icon="akar-icons:eye-open" width={24} />
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
              <InvestmentCard {...investment} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

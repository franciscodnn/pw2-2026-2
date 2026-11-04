'use client';

import { InvestmentCard } from '../components/InvestmentCard';
import { investments } from '@/data/data';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from "@iconify/react";

export default function Public() {
  return (
    <>
    <div className="investments grid grid-cols-3 gap-3">
      {investments.map((investment) => (
        <Link key={investment.id} href={`detalhar/${investment.id}`} className="text-sm">
          <InvestmentCard {...investment} />
        </Link>
      ))}
    </div>
    </>
  );
}
'use client';

import { InvestmentCard } from '../components/InvestmentCard';
import { InvestmentForm, InvestmentFormData } from '../components/InvestmentForm';
import { Modal } from '../components/Modal';
import { InvestmentCardModel, investments as initialInvestments} from '@/data/data';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from "@iconify/react";
import { useHiddenValue } from '../_context/HiddenValueContext';
import { HeaderComponent } from './header/page';
import { useInvestmentContext } from '../_context/InvestmentContext';

// export const instant = false;

export default function Public() {   
  const [showModal, setShowModal] = useState(false);  
  const { investments } = useInvestmentContext();

  function toggleModal() {
    setShowModal(!showModal);
  }


  console.log( `Initial investments: ${initialInvestments}` );

  return (
    <>
      <nav className="flex justify-end mb-6 gap-2">
        <HeaderComponent />
      </nav>
      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <Link 
            key={investment.id} 
            href={`detail/${investment.id}`} className="text-sm">
              <InvestmentCard {...investment} />
          </Link>
        ))}
      </div>
    </>
  );
}
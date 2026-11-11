'use client';

import { InvestmentCard } from '../components/InvestmentCard';
import { InvestmentForm, InvestmentFormData } from '../components/InvestmentForm';
import { Modal } from '../components/Modal';
import { InvestmentCardModel, investments as initialInvestments} from '@/data/data';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from "@iconify/react";

export default function Public() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [investments, setInvestments] = useState<InvestmentCardModel[]>(initialInvestments);

  function handleClick() {
    setCount(count + 1);
    setHidden(!hidden);

    console.log(hidden);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleAddInvestment(data: InvestmentFormData) {
    const nextId = Math.max(0, ...investments.map((i) => i.id)) + 1;
    const investment: InvestmentCardModel = { id: nextId, ...data };
    
    // initialInvestments.push(investment);
    // setInvestments([...initialInvestments]); // novo array => React re-renderiza

    // OU
    setInvestments([...investments, investment]); // novo array => React re-renderiza
    
    setShowModal(false);
  }

  console.log( `Initial investments: ${initialInvestments}` );

  return (
    <>
      <p>{ count }</p>
      <nav className="flex justify-end mb-6 gap-2">
        <button
          id="btnHidden"
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
          onClick={ toggleModal }
          className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
          +
        </button>
      </nav>
      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <Link 
            key={investment.id} 
            href={`detail/${investment.id}`} className="text-sm">
              <InvestmentCard {...investment} hidden={hidden} />
          </Link>
        ))}
      </div>

      <Modal open={showModal} onClose={toggleModal}>
        <InvestmentForm onSubmit={handleAddInvestment} onCancel={toggleModal} />
      </Modal>
    </>
  );
}
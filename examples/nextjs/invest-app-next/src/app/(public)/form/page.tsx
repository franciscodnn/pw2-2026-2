'use client';

import { useRouter } from 'next/navigation';
import { InvestmentCardModel, investments } from '@/data/data';
import { InvestmentForm, InvestmentFormData } from '@/app/components/InvestmentForm';
// import { useInvestmentContext } from '@/app/_context/InvestmentContext';
import { useInvestmentContext } from '@/app/_context/InvestmentContext';

export default function FormPage() {
  const router = useRouter();
  const { investments, setInvestments } = useInvestmentContext();

  function handleSubmit(data: InvestmentFormData) {
    const nextId = Math.max(0, ...investments.map((i) => i.id)) + 1;
    const investment: InvestmentCardModel = { id: nextId, ...data };

    setInvestments([...investments, investment]);

    console.log( investments );
    router.push('/');
  }

  return (
    <div className="flex justify-center pb-8">
      <InvestmentForm onSubmit={handleSubmit} onCancel={() => router.push('/')} />
    </div>
  );
}

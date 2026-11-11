'use client';

import { useRouter } from 'next/navigation';
import { InvestmentCardModel, investments } from '@/data/data';
import { InvestmentForm, InvestmentFormData } from '@/app/components/InvestmentForm';

export default function FormPage() {
  const router = useRouter();

  function handleSubmit(data: InvestmentFormData) {
    const nextId = Math.max(0, ...investments.map((i) => i.id)) + 1;
    const investment: InvestmentCardModel = { id: nextId, ...data };

    investments.push(investment);
    // router.push('/');
  }

  return (
    <div className="flex justify-center pb-8">
      <InvestmentForm onSubmit={handleSubmit} onCancel={() => router.push('/')} />
    </div>
  );
}

'use client';

import { useParams } from "next/navigation";
import { Suspense, use, useEffect, useState } from "react";
import { InvestmentCardModel, investments } from "@/data/data";
import { InvestmentCard } from "@/app/components/InvestmentCard";
import Link from "next/link";

const EMPTY_INVESTMENT: InvestmentCardModel = {
  id: 0,
  name: '',
  value: 0,
  origin: '',
  category: '',
  date: '',
  interest: '',
};

export default function DetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvestmentDetail />
    </Suspense>
  );
}

function InvestmentDetail() {
  // const { slug: id } = useParams();
  const params = useParams();
  // const id = params?.id;

  console.log('id: ', params.id);

  const [counter, setCounter] = useState(0);
  // const [investment, setInvestment] = useState<InvestmentCardModel | undefined>(EMPTY_INVESTMENT);

  const investment: InvestmentCardModel | undefined = investments.find((investment) => investment.id === Number(params?.id)) ?? EMPTY_INVESTMENT;
  // setInvestment(investment ?? EMPTY_INVESTMENT);

  /*
  useEffect(() => {
    const investment: InvestmentCardModel | undefined = investments.find((investment) => investment.id === Number(id));
    setInvestment(investment ?? EMPTY_INVESTMENT);

    return () => {
      console.log('desmontou');
    }
  }, [id]);
  */
  // console.log('renderizou');

  return (
    <div className="container lg:max-w-screen-lg mx-auto">
      <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
      <div className="flex justify-end mb-6">              
      </div>
      <hr className="w-100 m-auto"/>
      <div className="investments grid grid-cols w-100 m-auto gap-3 text-xl my-8">
    <InvestmentCard {...investment} />
    <Link href="/" className="text-sm">voltar</Link>
    </div>
    
    </div>
  );
}
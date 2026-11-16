'use client';

import React, { createContext, useState, use, useEffect } from 'react';
import { InvestmentCardModel, investments as initialInvestments } from '@/data/data';

export interface InvestmentCardContext {
    investments: InvestmentCardModel[];
    setInvestments: (investments: InvestmentCardModel[]) => void;
};

const InvestmentContext = createContext<InvestmentCardContext | null>(null);

export function InvestmentProvider( { children } : { children: React.ReactNode}) {
    const [investments, setInvestments] = useState<InvestmentCardModel[]>([]);

    useEffect(
        () => {
            setInvestments(initialInvestments);
        }, []);

    return(
        <InvestmentContext value={ { investments, setInvestments} }>
            { children }
        </InvestmentContext>
    );
}

export function useInvestmentContext() {
    const context = use(InvestmentContext);
    if (!context) {
        throw new Error('useInvestmentContext must be used within a InvestmentProvider');
    }
    return context; // { investments, setInvestments }
}
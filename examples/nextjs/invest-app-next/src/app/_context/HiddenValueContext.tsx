'use client';

import { createContext, useState, use, useEffect } from 'react';

export interface HiddenValue {
  hidden: boolean;
  toggleHidden: () => void;
}

const HiddenValueContext = createContext<HiddenValue | null>(null);

export function HiddenValueProvider({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(
    () => {
      console.log(`useEffect: hidden alterado`);
    }, [hidden]);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <HiddenValueContext value={{ hidden, toggleHidden }}>
      {children}
    </HiddenValueContext>
  );
}

export function useHiddenValue() {
  const context = use(HiddenValueContext);
  if (!context) {
    throw new Error('useHiddenValue must be used within a HiddenValueProvider');
  }
  return context; // { hidden, toggleHidden }
}
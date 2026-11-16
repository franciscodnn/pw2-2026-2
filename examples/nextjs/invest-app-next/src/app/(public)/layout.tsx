import { Icon } from "@iconify/react";

import { HiddenValueProvider } from "../_context/HiddenValueContext";
import { InvestmentProvider } from "../_context/InvestmentContext";

// export const instant = false;

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <InvestmentProvider>
    <HiddenValueProvider>
     { 
     /* A partir daqui, qualquer componente renderizado
       como descendente, conseguirá acessar o Contexto */
    }
      <div className="container lg:max-w-screen-lg mx-auto">
      <header>
          <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
        </header>
        {children}
      </div>
    </HiddenValueProvider>
    </InvestmentProvider>
  );
}
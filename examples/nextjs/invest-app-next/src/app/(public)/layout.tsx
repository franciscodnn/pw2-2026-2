import { Icon } from "@iconify/react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto">
      <header>
          <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
        </header>
        {children}
      </div>
    </>
  );
}
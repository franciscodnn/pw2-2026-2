import { Icon } from "@iconify/react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto">
      <header>
          <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
        </header>

        <nav className="flex justify-end mb-6 gap-2">
          <button
            id="btnAdd"
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-3 py-2 rounded-full shadow-md transition">
            <Icon icon="akar-icons:eye-open" width={24} />
          </button>
          <button
            id="btnAdd"
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
            +
          </button>
        </nav>
        {children}
      </div>
    </>
  );
}
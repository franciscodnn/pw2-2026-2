import { InvestmentCard } from './components/InvestmentCard';

export default function Home() {
  const investment = {
    id: 1,
    name: 'Tesouro Selic 2029',
    value: 100,
    origin: 'Tesouro Nacional',
    category: 'Pos',
    date: '2023-03-22',
    interest: '100% Selic',
  };

  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto">
        <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
        <div className="flex justify-end mb-6">
          <button
            id="btnAdd"
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
            +
          </button>
        </div>
        <div className="investments grid grid-cols-3 gap-3">
          <InvestmentCard 
            {...investment}
            />
        </div>
      </div>
    </>
  );
}

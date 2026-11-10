import { InvestmentCardModel } from "@/data/data";


// export function InvestmentCard({ name, value, 
//     origin, category, date, interest, hidden = false }: Partial<InvestmentCardModel> & { hidden?: boolean }) {
export function InvestmentCard({ id, name, value, 
    origin, category, date, interest, hidden }: { 
      id: number, 
      name: string, value: number, 
      origin: string, category: string, 
      date: string, interest: string, 
      hidden: boolean }) {

  return (
  <div>
    <div className="relative bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-start gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
          <p className="text-lg font-semibold text-gray-700">R$ {hidden ? '*****' : Number(value).toFixed(2) }</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <span className="font-bold">Origem:</span> {origin}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Categoria:</span> {category}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Data:</span> {date}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Taxa:</span> {interest}
        </p>
      </div>
      <button type="button" className="absolute bottom-4 right-4 text-gray-500 hover:text-red-700 transition" aria-label="Apagar investimento">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
  );
}
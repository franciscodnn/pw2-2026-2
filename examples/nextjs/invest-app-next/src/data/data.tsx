export interface InvestmentCardModel {
  id: number;
  name: string;
  value: number;
  origin: string;
  category: string;
  date: string;
  interest: string;
}

export const investments: InvestmentCardModel[] = [
  {
    id: 1,
    name: 'Tesouro Selic 2029',
    value: 100,
    origin: 'Tesouro Nacional',
    category: 'Pos',
    date: '2023-03-22',
    interest: '100% Selic',
  },
  {
    id: 2,
    name: 'Tesouro IPCA 2029',
    value: 100,
    origin: 'Tesouro Nacional',
    category: 'IPCA',
    date: '2023-03-22',
    interest: 'IPCA + 5,83%',
  },
];

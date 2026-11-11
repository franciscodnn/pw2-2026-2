'use client';

import { ChangeEvent, SubmitEvent, useState } from 'react';
import { InvestmentCardModel } from '@/data/data';

export type InvestmentFormData = Omit<InvestmentCardModel, 'id'>;

type InvestmentFormProps = {
  onSubmit: (data: InvestmentFormData) => void;
  onCancel: () => void;
};

const EMPTY_FORM: InvestmentFormData = {
  name: '',
  value: 0,
  origin: '',
  category: '',
  date: '',
  interest: '',
};

const inputClass =
  'w-full border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500';
const labelClass = 'block text-xs font-bold text-gray-500 mb-0.5';

export function InvestmentForm({ onSubmit, onCancel }: InvestmentFormProps) {
  const [form, setForm] = useState<InvestmentFormData>(EMPTY_FORM);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: name === 'value' ? Number(value) : value });
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit(form);
    setForm(EMPTY_FORM);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 space-y-2"
    >
      <h2 className="text-base font-semibold text-gray-700 text-center">
        Novo investimento
      </h2>

      <div>
        <label htmlFor="name" className={labelClass}>Nome</label>
        <input id="name" name="name" type="text" required
          value={form.name} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="value" className={labelClass}>Valor (R$)</label>
        <input id="value" name="value" type="number" min="0" step="0.01" required
          value={form.value} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="origin" className={labelClass}>Origem</label>
        <input id="origin" name="origin" type="text" required
          value={form.origin} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="category" className={labelClass}>Categoria</label>
        <select id="category" name="category" required
          value={form.category} onChange={handleChange} className={inputClass}>
          <option value="" disabled>Selecione...</option>
          <option value="Pos">Pós-fixado</option>
          <option value="Pre">Pré-fixado</option>
          <option value="IPCA">IPCA</option>
        </select>
      </div>

      <div>
        <label htmlFor="date" className={labelClass}>Data</label>
        <input id="date" name="date" type="date" required
          value={form.date} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>Taxa</label>
        <input id="interest" name="interest" type="text" required placeholder="Ex.: 100% Selic"
          value={form.interest} onChange={handleChange} className={inputClass} />
      </div>

      <div className="flex justify-end items-center gap-3 pt-1">
        <button
          type="button"
          onClick={onCancel}
          className="text-xs text-gray-500 hover:text-gray-700 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-md transition"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}

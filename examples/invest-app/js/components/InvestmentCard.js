import { removeInvestmentCard } from '../ui/investmentsUI.js';

export function InvestmentCardHTML({ name, value, origin, category, date, interest }) {
  return `
  <div>
    <div class="relative bg-white shadow-md rounded-lg p-4">
      <div class="flex justify-between items-start gap-3">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">${name}</h3>
          <p class="text-lg font-semibold text-gray-700">R$ ${value.toFixed(2)}</p>
        </div>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500">
          <span class="font-bold">Origem:</span> ${origin}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Categoria:</span> ${category}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Data:</span> ${date}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Taxa:</span> ${interest}
        </p>
      </div>
      <button type="button" class="absolute bottom-4 right-4 text-gray-500 hover:text-red-700 transition" aria-label="Apagar investimento">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
      `;
}

export function InvestmentCard({ id, name, value, origin, category, date, interest }) {
  const template = document.querySelector('#investment-card-template');
  const clone = template.content.cloneNode(true);

  clone.firstElementChild.dataset.id = id;

  clone.querySelector('[data-name]').textContent = name;
  clone.querySelector('[data-value]').textContent = `R$ ${value.toFixed(2)}`;
  clone.querySelector('[data-origin]').textContent = `Origem: ${origin}`;
  clone.querySelector('[data-category]').textContent = `Categoria: ${category}`;
  clone.querySelector('[data-date]').textContent = `Data: ${date}`;
  clone.querySelector('[data-interest]').textContent = `Taxa: ${interest}`;

  clone.querySelector('button').addEventListener('click', function () {
    removeInvestmentCard(id);
  });

  return clone;
}
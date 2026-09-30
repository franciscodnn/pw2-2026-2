import { InvestmentCard } from '../components/InvestmentCard.js';
import { investiments } from '../../data/investiments.js';
import Storage from '../services/storage.js';

function load() {
  Storage.init(investiments);

  const investmentsContainer = document.querySelector('.investments');
  investmentsContainer.innerHTML = '';

  Storage.getAll().forEach((investment) => {
    const investmentCard = InvestmentCard(investment);
    investmentsContainer.appendChild(investmentCard);
  });
}

function createInvestmentCard(investment) {
  const newInvestment = Storage.add(investment);

  const investmentCard = InvestmentCard(newInvestment);
  const investmentsContainer = document.querySelector('.investments');
  investmentsContainer.appendChild(investmentCard);
}

// Remove do storage e da tela o card com o data-id informado
function removeInvestmentCard(id) {
  Storage.remove(id);
  document.querySelector(`[data-id="${id}"]`)?.remove();
}

export { load, createInvestmentCard, removeInvestmentCard };
import { load, createInvestmentCard } from './ui/investmentsUI.js';


document.addEventListener("DOMContentLoaded", function () {
  // carregamento dos investimentos nos cards do Container
  load(); 


  
  document
    .querySelector('#btnAdd')
    .addEventListener('click', function () {
    const newInvestment = {
      name: 'Tesouro Reserva',
      value: 500,
      origin: 'Tesouro Nacional',
      category: 'Pos',
      date: '2023-03-22',
      interest: '100% Selic',
    };
    

    createInvestmentCard(newInvestment);

    // const card = document.querySelector('.investments');
    // card.appendChild(newInvestDiv);

    // console.log(newInvestDiv);
  });

});

window.addEventListener('storage', function (event) {
  if (event.key === '@invest-app') {
    load();
  }
});
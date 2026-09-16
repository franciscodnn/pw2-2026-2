function desvendarCurso() {
    const curso = document.querySelector('input[name=curso]').value;

    document.querySelector('#resposta').textContent = curso;
}

document
  .querySelector('form')
  .addEventListener('submit', function(event) {
    // Evite o comportamento padrão do submit - envio de dados
    // ao servidor
    event.preventDefault();

    alert('Dados não enviados para o servidor');
  });

/*
document
  .querySelector('input[name=curso]')
  .addEventListener('input', function(event){
    document.querySelector('#resposta').textContent = '';

    if(event.target.value.length >= 3)
        desvendarCurso();
  });
*/

console.log(typeof document.querySelector('input[name=curso]'));

console.log(document.querySelector('input[name=curso]') instanceof HTMLInputElement);
/*
document
  .querySelector('#btnDesvendar')
  .onclick = desvendarCurso;
*/


document
  .querySelector('#btnDesvendar')
  .addEventListener('click', function() {
    alert('Curso desvendado!');
    desvendarCurso();
  });

document
  .querySelector('#btnDesvendar')
  .addEventListener('click', function() {
    alert('O tratamento foi finalizado!');
  });

import flags from './model/flags.js';

const main = document.querySelector('main');

main.insertAdjacentHTML('beforebegin', '<h2>250 países</h2>');

main.insertAdjacentHTML('afterend', '<h2>Término</h2>');

const fragment = document.createDocumentFragment();

// loadCardsAsElements();

function loadCardsAsElements() {
    flags.forEach(
        (elemento) => {
            const card = criarCard(elemento);
            // main.appendChild(card);
            // main.insertAdjacentElement('beforeend', card.firstElementChild );

            fragment.appendChild(card);

            // console.log( card );
        }
    );
}

function loadCardsAsHTML() {
    const cardsAsHTML = flags.map( (elemento) => criarCardHTML(elemento) );

    main.innerHTML = cardsAsHTML.join('\n');
}

main.appendChild(fragment);

// const dataToHTML = flags.map(
//     (elemento) => criarCard(elemento)
// );

// console.log(dataToHTML);

function criarCardHTML(flag) {
    /*
    <div class="flag col-2 my-2 text-center">
      <img src="./path/to/image.png" alt="País">
      <p>País</p>
    </div>
    */

    return `
        <div class="flag col-2 my-2 text-center">
            <img src="${flag.image}" alt="${flag.name}">
            <p>${flag.name}</p>
        </div>
    `;
}


function criarCard(flag) {
    const template = document.querySelector('template');

    /*
    <div class="flag col-2 my-2 text-center">
      <img src="./path/to/image.png" alt="País">
      <p>País</p>
    </div>
    */

    const clone = template.content.cloneNode(true);

    clone.querySelector('img').setAttribute(
        'src',
        flag.image
    );
    // clone.querySelector('img').setAttribute(
    //     'alt',
    //     flag.name
    // );

    clone.querySelector('img').alt = flag.name;
    clone.querySelector('p').textContent = flag.name;

    console.log( clone.toString() );
    
    return clone;
}
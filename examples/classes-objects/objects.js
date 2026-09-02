const host = {
  hostname: "web-server-01",
  ip: "192.168.1.10",
  "content-type": "application/json", // Chave com hífen
  200: "OK",                         // Chave numérica
};

console.log(host.hostname);
console.log(host.ip);
console.log(host['content-type']);
console.log(host[200]);


const arrayLike = {
    0: 'teste',
    1: 'novo',
    length: 2
}


console.log( [..."teste"] );

// por que não converteu para array?
// console.log( [...arrayLike] );

// console.log(Object.keys("teste"));

const config = { theme: "dark", timeout: 5000 };

// console.log(Object.keys(config));
// console.log(Object.values(config));
console.log(Object.entries(config));

config.retries = 3;

console.log(Object.values(config));

console.log( "retries" in config);
console.log( "toString" in config);
console.log(Object.hasOwn(config, "toString"));

// ------

const person = {
  firstName: "Maria",
  city: "João Pessoa",
};

// 1. Renomeando variáveis locais (chave: novoNome)
const { city: location } = person;
console.log(location); // "João Pessoa"

// 2. Valor padrão para propriedade ausente ou undefined
const { role = "visitante" } = person;
console.log(role); // "visitante"




// -----
class BankAccount {
  #balance = 0; // Privado
  #teste = 'teste';

  constructor(initial) { this.#balance = initial; }

  get balance() { return this.#balance; }

  set balance(value) { this.#balance = value; }

  deposit(amount) { this.#balance += amount; }
}

const account = new BankAccount(500);
account.deposit(200);
account.balance = 1000;
console.log(account.balance);
// console.log(account.#teste); // 700
// console.log(account.#balance); // SyntaxError (campo privado)
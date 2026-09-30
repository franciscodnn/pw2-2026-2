const KEY = '@invest-app';

// Se ainda não existir nada no storage, grava os dados iniciais
function init(defaults) {
  if (localStorage.getItem(KEY) === null) {
    localStorage.setItem(KEY, JSON.stringify(defaults));
  }
}

// Retorna todos os investimentos salvos
function getAll() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

// Retorna um investimento pelo id
function getById(id) {
  return getAll().find((item) => item.id === id);
}

// Adiciona um investimento, gerando o id automaticamente
function add(investment) {
  const items = getAll();
  let id = generateId();
  while (items.some((item) => item.id === id)) {
    id = generateId();
  }

  const newItem = { ...investment, id };
  items.push(newItem);
  localStorage.setItem(KEY, JSON.stringify(items));

  return newItem;
}

// Remove um investimento pelo id
function remove(id) {
  const items = getAll().filter((item) => String(item.id) !== String(id));
  localStorage.setItem(KEY, JSON.stringify(items));
}

// Gera um id aleatório com 8 letras minúsculas (ex.: "kqzmwtab")
function generateId() {
  const symbols = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return id;
}


export default { init, getAll, getById, add, remove };
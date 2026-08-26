// Exportar sum(...)

function sum(p1, p2) {  return p1 + p2; }
function sub(p1, p2) {  return p1 - p2; }
function mul(p1, p2) {  return p1 * p2; }

/* exportação nomeada */
export { sum, sub, mul };

/* exportação padrão ou default */
// export default mul;
export default { 
    mul /* : mul */, 
    sum /* : sum */
};
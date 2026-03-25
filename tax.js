// tests/tax.test.js
const { calculatePriceWithTax } = require('../src/tax');

const result = calculatePriceWithTax(100, 15);
console.log(result); // Deve mostrar 115.00
describe('calculatePriceWithTax', () => {
test('deve calcular corretamente o preço com imposto', () => {
const result = calculatePriceWithTax(100, 15);
expect(result).toBe(115.00);
});
test('deve retornar o mesmo valor quando imposto for 0%', () => {
const result = calculatePriceWithTax(100, 0);
expect(result).toBe(100.00);
});
test('deve lançar erro para valores negativos', () => {
expect(() => calculatePriceWithTax(-100, 15)).toThrow();
expect(() => calculatePriceWithTax(100, -15)).toThrow();
});
test('deve lançar erro para valores não numéricos', () => {
expect(() => calculatePriceWithTax("100", 15)).toThrow();
expect(() => calculatePriceWithTax(100, "15")).toThrow();
});
});

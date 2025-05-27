const {calcularOperacion} = require('../../src/operaciones');

test('Suma: 1+2 = 3', () => {
  expect(calcularOperacion('1+2')).toBe('3');
});

test('Resta: 5-3 = 2', () => {
  expect(calcularOperacion('5-3')).toBe('2');
});

test('Multiplicación: 4*3 = 12', () => {
  expect(calcularOperacion('4*3')).toBe('12');
});

test('División: 10/2 = 5', () => {
  expect(calcularOperacion('10/2')).toBe('5');
});

test('División por cero debe dar Error', () => {
  expect(calcularOperacion('10/0')).toBe('Error');
});

test('Formato inválido debe dar Error', () => {
  expect(calcularOperacion('abc')).toBe('Error');
});

test('Operador inválido debe dar Error', () => {
  expect(calcularOperacion('5^3')).toBe('Error');
});

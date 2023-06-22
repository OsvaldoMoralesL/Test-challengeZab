const factorial = require('./factorial');

test('Factorial de 0 es 1', () => {
    const resultado = factorial(0);
    expect(resultado).toBe(1);
});

test('Factorial de 1 es 1', () => {
    const resultado = factorial(1);
    expect(resultado).toBe(1);
});

test('Factorial de 5 es 120', () => {
    const resultado = factorial(5);
    expect(resultado).toBe(120);
});

test('Factorial de número negativo arroja error', () => {
    expect(() => factorial(-1)).toThrow('El factorial solo está definido para números positivos.');
});
const eliminarNoCanonicos = require('./eliminarNoCanonicos');

test('Eliminar bases no canónicas de la cadena ADN', () => {
    const cadenaADN = 'ACGTNACGT';
    const resultado = eliminarNoCanonicos(cadenaADN);
    expect(resultado).toBe('ACGTACGT');
});

test('No eliminar bases canónicas de la cadena ADN', () => {
    const cadenaADN = 'ACGT';
    const resultado = eliminarNoCanonicos(cadenaADN);
    expect(resultado).toBe('ACGT');
});

test('Eliminar todas las bases no canónicas de la cadena ADN', () => {
    const cadenaADN = 'NNNN';
    const resultado = eliminarNoCanonicos(cadenaADN);
    expect(resultado).toBe('');
});

test('Eliminar bases no canónicas de la cadena ADN mixta', () => {
    const cadenaADN = 'ACGTNACGTN';
    const resultado = eliminarNoCanonicos(cadenaADN);
    expect(resultado).toBe('ACGTACGT');
});
const { describe, test, expect } = require('@jest/globals');

const {
  somar,
  calcularMedia,
  verificarAprovacao,
  validarNome,
} = require('../index');

describe('Teste Unitário', () => {
  test('TU-001: deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('TU-002: deve calcular a média de duas notas', () => {
    expect(calcularMedia(8, 6)).toBe(7);
  });

  test('TU-003: deve retornar Aprovado para média maior ou igual a 7', () => {
    expect(verificarAprovacao(7)).toBe('Aprovado');
  });

  test('TU-004: deve validar nome com pelo menos 3 caracteres', () => {
    expect(validarNome('Ana')).toBe(true);
  });
});

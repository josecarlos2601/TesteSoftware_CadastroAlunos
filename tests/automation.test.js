const {
  somar,
  calcularMedia,
  verificarAprovacao
} = require("../index");

describe("Automação de Testes", () => {
  test("AUT-001: automação deve validar soma sem intervenção manual", () => {
    expect(somar(10, 5)).toBe(15);
  });

  test("AUT-002: automação deve validar cálculo de média", () => {
    expect(calcularMedia(10, 8)).toBe(9);
  });

  test("AUT-003: automação deve validar regra de aprovação", () => {
    expect(verificarAprovacao(9)).toBe("Aprovado");
  });
});
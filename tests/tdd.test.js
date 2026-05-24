const {
  verificarAprovacao
} = require("../index");

describe("TDD — Test Driven Development", () => {
  test("TDD-001: média 6.9 deve retornar Reprovado", () => {
    expect(verificarAprovacao(6.9)).toBe("Reprovado");
  });

  test("TDD-002: média 10 deve retornar Aprovado", () => {
    expect(verificarAprovacao(10)).toBe("Aprovado");
  });
});
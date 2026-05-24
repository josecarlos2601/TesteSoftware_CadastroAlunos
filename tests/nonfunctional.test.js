const request = require("supertest");
const { app } = require("../index");

describe("Teste Não Funcional", () => {
  test("TNF-001: rota /alunos deve responder em menos de 1 segundo", async () => {
    const inicio = Date.now();

    const resposta = await request(app).get("/alunos");

    const fim = Date.now();
    const tempoResposta = fim - inicio;

    expect(resposta.statusCode).toBe(200);
    expect(tempoResposta).toBeLessThan(1000);
  });

  test("TNF-002: resposta deve ser em formato JSON", async () => {
    const resposta = await request(app).get("/alunos");

    expect(resposta.headers["content-type"]).toMatch(/json/);
  });
});
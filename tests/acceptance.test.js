const request = require("supertest");
const { app } = require("../index");

describe("Teste de Aceitação", () => {
  test("TA-001: o sistema deve permitir cadastrar um aluno válido", async () => {
    await request(app).post("/reset");

    const resposta = await request(app)
      .post("/alunos")
      .send({
        nome: "Mariana",
        turma: "3º A",
        nota: 8
      });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body.nome).toBe("Mariana");
    expect(resposta.body.turma).toBe("3º A");
    expect(resposta.body.nota).toBe(8);
  });
});
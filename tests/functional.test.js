const request = require("supertest");
const { app } = require("../index");

describe("Teste Funcional", () => {
  test("TF-001: deve listar alunos cadastrados", async () => {
    await request(app).post("/reset");

    const resposta = await request(app).get("/alunos");

    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });

  test("TF-002: deve bloquear cadastro com nome inválido", async () => {
    const resposta = await request(app)
      .post("/alunos")
      .send({
        nome: "A",
        turma: "3º B",
        nota: 7
      });

    expect(resposta.statusCode).toBe(400);
    expect(resposta.body.erro).toBe("Nome inválido");
  });

  test("TF-003: deve buscar aluno pelo ID", async () => {
    await request(app).post("/reset");

    const resposta = await request(app).get("/alunos/1");

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body.nome).toBe("Ana");
  });
});
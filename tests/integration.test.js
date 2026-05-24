const request = require("supertest");
const { app } = require("../index");

describe("Teste de Integração", () => {
  test("TI-001: deve integrar rota POST /alunos com armazenamento em memória", async () => {
    await request(app).post("/reset");

    const respostaCadastro = await request(app)
      .post("/alunos")
      .send({
        nome: "Carlos",
        turma: "3º B",
        nota: 9
      });

    expect(respostaCadastro.statusCode).toBe(201);

    const respostaLista = await request(app).get("/alunos");

    expect(respostaLista.statusCode).toBe(200);
    expect(respostaLista.body.length).toBe(2);
    expect(respostaLista.body[1].nome).toBe("Carlos");
  });
});
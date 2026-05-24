const request = require("supertest");
const { app } = require("../index");

describe("Teste E2E — End-to-End", () => {
  test("E2E-001: cadastrar, listar, editar, consultar e excluir aluno", async () => {
    await request(app).post("/reset");

    const cadastro = await request(app)
      .post("/alunos")
      .send({
        nome: "João",
        turma: "3º B",
        nota: 6
      });

    expect(cadastro.statusCode).toBe(201);

    const id = cadastro.body.id;

    const listagem = await request(app).get("/alunos");

    expect(listagem.statusCode).toBe(200);

    const edicao = await request(app)
      .put(`/alunos/${id}`)
      .send({
        nota: 9
      });

    expect(edicao.statusCode).toBe(200);
    expect(edicao.body.nota).toBe(9);

    const consulta = await request(app).get(`/alunos/${id}`);

    expect(consulta.statusCode).toBe(200);
    expect(consulta.body.nota).toBe(9);

    const exclusao = await request(app).delete(`/alunos/${id}`);

    expect(exclusao.statusCode).toBe(200);
    expect(exclusao.body.mensagem).toBe("Aluno removido com sucesso");
  });
});
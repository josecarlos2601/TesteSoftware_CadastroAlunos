const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Banco de dados em memória para fins didáticos
let alunos = [
  {
    id: 1,
    nome: "Ana",
    turma: "3º B",
    nota: 8
  }
];

// ================================
// FUNÇÕES PARA TESTE UNITÁRIO
// ================================

function somar(a, b) {
  return a + b;
}

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function verificarAprovacao(media) {
  if (media >= 7) {
    return "Aprovado";
  }

  return "Reprovado";
}

function validarNome(nome) {
  return typeof nome === "string" && nome.trim().length >= 3;
}

// ================================
// ROTAS DA API
// ================================

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Teste de Software funcionando"
  });
});

app.get("/alunos", (req, res) => {
  res.json(alunos);
});

app.get("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);

  const aluno = alunos.find((item) => item.id === id);

  if (!aluno) {
    return res.status(404).json({
      erro: "Aluno não encontrado"
    });
  }

  res.json(aluno);
});

app.post("/alunos", (req, res) => {
  const { nome, turma, nota } = req.body;

  if (!validarNome(nome)) {
    return res.status(400).json({
      erro: "Nome inválido"
    });
  }

  if (!turma) {
    return res.status(400).json({
      erro: "Turma é obrigatória"
    });
  }

  if (typeof nota !== "number") {
    return res.status(400).json({
      erro: "Nota deve ser numérica"
    });
  }

  const novoAluno = {
    id: alunos.length + 1,
    nome,
    turma,
    nota
  };

  alunos.push(novoAluno);

  res.status(201).json(novoAluno);
});

app.put("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);

  const aluno = alunos.find((item) => item.id === id);

  if (!aluno) {
    return res.status(404).json({
      erro: "Aluno não encontrado"
    });
  }

  const { nome, turma, nota } = req.body;

  aluno.nome = nome || aluno.nome;
  aluno.turma = turma || aluno.turma;

  if (typeof nota === "number") {
    aluno.nota = nota;
  }

  res.json(aluno);
});

app.delete("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);

  const alunoExiste = alunos.some((item) => item.id === id);

  if (!alunoExiste) {
    return res.status(404).json({
      erro: "Aluno não encontrado"
    });
  }

  alunos = alunos.filter((item) => item.id !== id);

  res.json({
    mensagem: "Aluno removido com sucesso"
  });
});

// Rota para limpar dados durante testes
app.post("/reset", (req, res) => {
  alunos = [
    {
      id: 1,
      nome: "Ana",
      turma: "3º B",
      nota: 8
    }
  ];

  res.json({
    mensagem: "Dados reiniciados"
  });
});

// ================================
// EXPORTAÇÃO PARA TESTES
// ================================

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

module.exports = {
  app,
  somar,
  calcularMedia,
  verificarAprovacao,
  validarNome
};
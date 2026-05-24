describe('Métricas de Teste', () => {
  test('MET-001: deve calcular percentual de aprovação dos testes', () => {
    const testesExecutados = 10;
    const testesAprovados = 8;

    const percentual = (testesAprovados / testesExecutados) * 100;

    expect(percentual).toBe(80);
  });

  test('MET-002: deve identificar quantidade de testes reprovados', () => {
    const testesExecutados = 10;
    const testesAprovados = 7;

    const testesReprovados = testesExecutados - testesAprovados;

    expect(testesReprovados).toBe(3);
  });
});

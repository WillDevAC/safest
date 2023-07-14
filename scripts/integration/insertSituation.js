const situacoes = [];

$("#btn-enviar").click(() => {
  
  insertSituation();

  const inventario = JSON.parse(localStorage.getItem('inventario'));
  inventario.situacoes = JSON.parse(localStorage.getItem('situacoes'));

  localStorage.setItem('inventario', JSON.stringify(inventario));
  localStorage.removeItem('situacoes');

  window.location.href = "../pages/insertImages.php";
});

$("#btn-adicionar").click(() => {
  insertSituation();
  limpar();
  window.location.href = "#";
});

function insertSituation() {
  const funcionario = $("#funcionario").val();
  const setor = $("#setor").val();
  const funcao = $("#funcao").val();
  const descricao = $("#descricao").val();
  const epi = $("#epi").val();
  const tiporisco = $("#tiporisco").val();
  const agente = $("#agente").val();
  const fonte = $("#fonte").val();
  const exposicao = $("#exposicao").val();
  const classificacaoConsequencia = $("#classificacao-cosequencia").val();
  const classificacaoProbabilidade = $("#classificacao-probabilidade").val();
  const medidasControle = $("#medidascontrole").val();
  const classificacaoConsequenciaReferencia = $("#classificacao-cosequencia-referencia").val();
  const classificacaoProbabilidadeReferencia = $("#classificacao-probabilidade-referencia").val();
  const matriz = $("#matriz").val();

  const situacao = {
    funcionario: funcionario,
    setor: setor,
    funcao: funcao,
    descricao: descricao,
    epi: epi,
    tiporisco: tiporisco,
    agente: agente,
    fonte: fonte,
    exposicao: exposicao,
    classificacaoConsequencia: classificacaoConsequencia,
    classificacaoProbabilidade: classificacaoProbabilidade,
    medidasControle: medidasControle,
    classificacaoConsequenciaReferencia: classificacaoConsequenciaReferencia,
    classificacaoProbabilidadeReferencia: classificacaoProbabilidadeReferencia,
    matriz: matriz
  }

  situacoes.push(situacao);

  localStorage.setItem('situacoes', JSON.stringify(situacoes));
}

function limpar() {
  $("#funcionario").val("");
  $("#setor").val("");
  $("#funcao").val("");
  $("#descricao").val("");
  $("#epi").val("");
  $("#tiporisco").val("");
  $("#agente").val("");
  $("#fonte").val("");
  $("#exposicao").val("");
  $("#classificacao-cosequencia").val("");
  $("#classificacao-probabilidade").val("");
  $("#medidascontrole").val("");
  $("#classificacao-cosequencia-referencia").val("");
  $("#classificacao-probabilidade-referencia").val("");
  $("#matriz").val("");
}

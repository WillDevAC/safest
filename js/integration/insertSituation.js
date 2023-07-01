const situacoes = [];

const insertSituation = (situacoes) => {
  
    $.ajax({
      url: "/refatoracao_safest/controladores/rota.php",
      type: "POST",
      data: {
        controlador: "situacao",
        acao: "salvar",
        situacoes: situacoes
      },
    })
      .done(function (msg) {
        //success
      })
      .fail(function (msg) {
        $.toast({
            heading: 'Ooops...',
            text: 'Erro ao inserir perigo, faça novamente...',
            showHideTransition: 'plain',
            icon: 'error',
            position: 'top-right'
        })
      });
  };

  $("#btn-enviar").click(() => {
    insertArraySituation();
    insertSituation(situacoes);
    console.log(situacoes);
    
  });

  $("#btn-adicionar").click(() => {
    insertArraySituation();
    limpar();
    window.location.href = "#";
  });


  function insertArraySituation(){

    const funcao = $("#funcao").val();
    const descricao = $("#descricao").val();
    const epi = $("#epi").val();
    const tiporisco = $("#tiporisco").val();
    const agente = $("#agente").val();
    const fonte = $("#fonte").val();
    const exposicao = $("#exposicao").val();
    const classificacaoConsequencia = $("#classificacao-cosequencia").val();
    const classififacaoProbabilidade = $("#classificacao-probabilidade").val();
    const medidasControle = $("#medidascontrole").val();
    const classificacaoConsequenciaReferencia = $("#classificacao-cosequencia-referencia").val();
    const classificacaoConsequenciaprobabilidade = $("#classificacao-probabilidade-referencia").val();
    const matriz = $("#matriz").val();

    const situacao = {
        funcao: funcao,
        descricao: descricao,
        epi: epi,
        tiporisco: tiporisco,
        agente: agente,
        fonte: fonte,
        exposicao: exposicao,
        classificacaoConsequencia: classificacaoConsequencia,
        classififacaoProbabilidade: classififacaoProbabilidade,
        medidasControle: medidasControle,
        classificacaoConsequenciaReferencia: classificacaoConsequenciaReferencia,
        classificacaoConsequenciaprobabilidade:classificacaoConsequenciaprobabilidade,
        matriz: matriz
    }

    situacoes.push(situacao);

  }

  function limpar(){    
    const funcao = $("#funcao").val("");
    const descricao = $("#descricao").val("");
    const epi = $("#epi").val("");
    const tiporisco = $("#tiporisco").val("");
    const agente = $("#agente").val("");
    const fonte = $("#fonte").val("");
    const exposicao = $("#exposicao").val("");
    const classificacaoConsequencia = $("#classificacao-cosequencia").val("");
    const classififacaoProbabilidade = $("#classificacao-probabilidade").val("");
    const medidasControle = $("#medidascontrole").val("");
    const classificacaoConsequenciaReferencia = $("#classificacao-cosequencia-referencia").val("");
    const classificacaoConsequenciaprobabilidade = $("#classificacao-probabilidade-referencia").val("");
    const matriz = $("#matriz").val("");
  }
  
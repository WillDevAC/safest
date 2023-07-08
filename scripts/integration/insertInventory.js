  const URL_REQUEST = "../../back/?rota="

  function insertInventory(){
    const nomeInve = $("#nomeInve").val();
    const cidade = $("#cidade").val();
    const estado = $("#estado").val();
    const rua = $("#rua").val();
    const bairro = $("#bairro").val();
    const numero = $("#numero").val();
    const cep = $("#cep").val();
    const complemento = $("#complemento").val();
    const data = $("#data").val();

    const inventory = {
      nomeInve: nomeInve,
      cidade: cidade,
      estado: estado,
      rua: rua,
      bairro: bairro,
      numero: numero,
      cep: cep,
      complemento: complemento,
      data: data
    }

    localStorage.setItem('inventario', JSON.stringify(inventory));
  
  }
  

$("#btn-inven").click(() => {
  insertInventory();
  /*
  $.ajax({
    url: URL_REQUEST + "InserirSituacao",
    type: "POST",    
    beforeSend: function () {
      $.LoadingOverlay("show");
    },
  })
    .done(function (response) {
      $.LoadingOverlay("hide");
      console.log(response);      
      //var url = JSON.parse(response).url;
      //window.location.href = url;
    })

    .fail(function (jqXHR, textStatus, response) {
      alert(response);
    });*/

  window.location.href = "../front/pages/insertSituation.php";
   
});
  
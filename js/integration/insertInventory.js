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
  window.location.href = "../safest/insertSituation.html";
});
  
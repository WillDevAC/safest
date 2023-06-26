const insertInventory = (nomeInve, cidade, estado, rua, bairro, numero, cep, complemento, data) => {
    // @Auth logic.
  
    $.ajax({
      url: "/refatoracao_safest/controladores/rota.php",
      type: "POST",
      data: {
        controlador: "inventario",
        acao: "inserir",
        nomeInve: nomeInve,
        cidade: cidade,
        estado: estado,
        rua: rua,
        bairro: bairro,
        numero: numero,
        cep: cep,
        complemento: complemento,
        data: data,
      },
    })
      .done(function (msg) {
        // Callback function for successful AJAX request.
        // You can handle the response here.
      })
      .fail(function (msg) {
        // Callback function for failed AJAX request.
        // You can handle the error here.
      });
  };
  
  const Register = () => {
    const nomeInve = $("#nomeInve").val();
    const cidade = $("#cidade").val();
    const estado = $("#estado").val();
    const rua = $("#rua").val();
    const bairro = $("#bairro").val();
    const numero = $("#numero").val();
    const cep = $("#cep").val();
    const complemento = $("#complemento").val();
    const data = $("#data").val();
  
    // Call the insertInventory function with the provided data.
    insertInventory(nomeInve, cidade, estado, rua, bairro, numero, cep, complemento, data);
  };
  
$("#btn-inven").click(Register);
  
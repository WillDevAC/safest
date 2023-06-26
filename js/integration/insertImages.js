const Image = (image) => {
    $.ajax({
      url: "/refatoracao_safest/controladores/rota.php",
      type: "POST",
      data: {
        controlador: "fotos",
        acao: "salvar",
        image: image
      }
    }).done(function (msg) {
      // Sucesso.
    }).fail(function (msg) {
      /*   $.toast({
            heading: 'Ooops...',
            text: 'Erro ao enviar a imagem.',
            showHideTransition: 'plain',
            icon: 'error',
            position: 'top-right'
        }) */
    });
  };
  
  $("#btn-image").click(function () {
    const image = $("#image").val();
    Image(image);
  });
  
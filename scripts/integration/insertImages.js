const fotos = [];
const URL_REQUEST = "../../safest-backend/?rota=";

function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {

            const tipo = file.name.split(".")[ file.name.split(".").length-1];

            const foto = {
                nome: file.name,
                tamanho: file.size,
                tipo: tipo,
                conteudo: reader.result
            };       
            fotos.push(foto);        
            //preview.appendChild(image);
        },
        false
      );
      reader.readAsDataURL(file);      
    }
   
  }  

  if (files) {
   
    for (const file of files) {
        readAndPreview(file)
    }

    //const fotos = Array.prototype.map.call(files,readAndPreview);
    //console.log(JSON.stringify(fotos));
  }
}

const picker = document.querySelector("#browse");
picker.addEventListener("change", previewFiles);

function ok() {
  const inventario = JSON.parse(localStorage.getItem('inventario'));
  inventario.fotos = fotos;

  const token = getCookieValue("@AuthToken");
  const idTecnico = getCookieValue("@UserID");

  console.log(idTecnico);

  inventario.idTecnico = idTecnico;

  const dados = JSON.stringify(inventario);

  console.log(inventario);
  
  const insertInventory = () => {
    $.ajax({
      url: URL_REQUEST + "insertInventory&token=" + token,
      type: "POST",
      data: dados,
      beforeSend: function () {
        $.LoadingOverlay("show");
      },
    })
      .done(function (response) {
        $.LoadingOverlay("hide");
  
        //const json = JSON.parse(response);  
        console.log(response);

      })
      .fail(function (jqXHR, textStatus, response) {
        alert(response);
      });
  };
   
  insertInventory();

}

function getCookieValue(cookieName) {
  var cookieArray = document.cookie.split(";");

  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];

    cookie = cookie.trim();

    if (cookie.indexOf(cookieName + "=") === 0) {
      var cookieValue = cookie.substring(cookieName.length + 1);
      //console.log("Valor do cookie " + cookieName + ": " + cookieValue);
      return cookieValue;
    }
  }

  console.log("Cookie " + cookieName + " não encontrado.");
  return null;
}



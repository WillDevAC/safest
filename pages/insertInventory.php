<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invetário</title>
</head>

<body>
    <div class="mt-2 ml-2">
        <label >Nome:</label><input type="text" name="nomeInve" id="nomeInve" required></label><br><br>
        <label for="cidade"> Endereço<br>
        <select name="cidade" id="cidade">
                <option >Selecione sua cidade</option>
                <option value="Rio Branco">Rio Branco</option>
                <option value="Cruzeiro do Sul">Cruzeiro do Sul</option>
            </select>
        </label><br>
        <label for="estado"> 
            <select name="estado" id="estado">
                    <option >Selecione seu estado</option>
                    <option value="Acre">AC</option>
                    <option value="Rodonia">RO</option>
                </select>
        </label><br>
        <label >Rua:</label><input type="text" name="rua" id="rua"required></label><br>
        <label >Bairro:</label><input type="text" name="bairro" id="bairro" required></label><br>
        <label >Número:</label><input type="text" name="numero" id="numero" required></label><br>
        <label >CEP:</label><input type="text" name="cep" id="cep" required></label><br>
        <label >Complemento:</label><input type="text" name="complemento" id="complemento" required></label><br><br>
        <label >Data:</label><input type="date" name="data" id="data" required><br>
        <button id="btn-inven">Enviar</button>
    </div>
</body>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="scripts/interface/jquery.js"></script>
    <script src="scripts/interface/jquery.mask.js"></script>
    <script src="scripts/interface/loader.js"></script>
    <script src="scripts/integration/insertInventory.js"></script>
</html>
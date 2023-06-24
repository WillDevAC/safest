<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components/toast.css">
    <link rel="stylesheet" href="css/components/form.css">
    <link rel="stylesheet" href="css/login.css">
    <title>SAFEST</title>
</head>
<body>
    <div class="container">
        <div class="box">
            <div class="form__header">
                <h2>Bem vindo à SaFest!</h2>
                <span>Preencha os dados abaixo para login.</span>
            </div>
            <div class="actions">
                <div class="action active">
                    Login
                </div>
                <div class="action ">
                    Cadastro
                </div>
            </div>
            <div class="form__group">
                <input type="email" class="input" required>
                <label for="email">Email</label>
            </div>
            <div class="form__group">
                <input type="password" class="input" required>
                <label for="email">Senha</label>
            </div>
            <div class="form__group">
                <button>Fazer login</button>
            </div>
            <div class="form__info">
                <span>Não possui uma conta? <a href="#">cadastra-se</a></span>
            </div>
        </div>
    </div>
    <footer class="contact__button animation_shake">
        <img src="assets/icons/question.svg" alt="icon" aria-label="icon" >
    </footer>
</body>
    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
    <script src="js/interface/toast.js"></script>
    <script src="js/interface/login.js"></script>
</html>
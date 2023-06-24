const saveTokenWithAuthSuccess = (user, token) => {
    //code.
};

const isEmptyValuesInput = (email, password) => {
    return email === "" || password === "" ? true : false;
}

const Login = (email, password) => {
  //@Auth logic.
  $.ajax({
    url: "",
    type: "POST",
    data: {
      email: email,
      password: password,
    },
  }).done(function (msg) {
    
    //success.

  }).fail(function (msg) {
    $.toast({
        heading: 'Ooops...',
        text: 'Usuário inexistente, ou senha incorreta.',
        showHideTransition: 'plain',
        icon: 'error',
        position: 'top-right'
    })
  });
};

const Register = (name, email, password) => {
  //code.
};

$("#btn-login").click(function () {
  //invoke Login().
  const email = $("#email").val();
  const password = $("#password").val();

  if(isEmptyValuesInput(email, password)) {
    $.toast({
        heading: 'Ooops...',
        text: 'Preencha os campos de email e senha.',
        showHideTransition: 'plain',
        icon: 'warning',
        position: 'top-right'
    })
    return;
  }

  //@Not empty Login() params.
  alert('não vázios');
});

$(".targetRegister").click(() => {
  //invoke Register().
});

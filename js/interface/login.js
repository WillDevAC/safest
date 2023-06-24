//@Define effect for float button contact.
setInterval(function () {
  $(".animation_shake").toggleClass("shake");
}, 2000);

//Define step @register or @login.
$(".action").click(function () {
  $(".action").removeClass("active");
  $(this).addClass("active");
});

//Invoke introduction toast.
$.toast({
  heading: 'Atenção',
  text: 'Funcionalidades em desenvolvimento.',
  position: 'top-right',
  stack: false
})


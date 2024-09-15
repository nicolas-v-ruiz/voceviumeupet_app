const script_do_google = 'https://script.google.com/macros/s/AKfycbx_477yb2jGfIi8uHbvySc9hhwnM1HcY8h6FVWu5e3c6tG726_riRZgeMfQ0CL2p9HF/exec';
const dados_do_formulario = document.forms['cadastro-pet-form'];

dados_do_formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  fetch(script_do_google, { method: POST, body: new FormData(dados_do_formulario) }).then(response => {
    // Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso

    alert('Dados enviados com sucesso!', response);
    dados_do_formulario.reset();
  })

  .catch(error =>
    //Se houver erro no envio, a mensagem a seguir será exibida
    console.error('Erro no envio dos dados!', error));
});

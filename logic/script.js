document.getElementById('cadastro-pet-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Obtém os valores dos campos do formulário
  const nomePet = document.getElementById('nomePet').value;
  const escolha = document.getElementById('escolha').value;
  const especie = document.getElementById('especie').value;
  const raca = document.getElementById('raca').value;
  const cor = document.getElementById('cor').value;
  const localizacao = document.getElementById('localizacao').value;
  const data = document.getElementById('data').value;
  const info = document.getElementById('info').value;
  const foto = document.getElementById('foto').files[0];

  // Cria um objeto FormData para enviar os dados incluindo o arquivo da foto
  const formData = new FormData();
  formData.append('nomePet', nomePet);
  formData.append('escolha', escolha);
  formData.append('especie', especie);
  formData.append('raca', raca);
  formData.append('cor', cor);
  formData.append('localizacao', localizacao);
  formData.append('data', data);
  formData.append('info', info);
  formData.append('foto', foto);

  // Envia os dados para o servidor (substitua a URL abaixo pela URL do seu backend)
  fetch('https://voceviumeupet-app.vercel.app', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Exibe uma mensagem de sucesso e limpa o formulário
          document.getElementById('success-message').style.display = 'block';
          document.getElementById('cadastro-pet-form').reset();
      } else {
          // Exibe uma mensagem de erro
          alert('Erro ao cadastrar o pet. Tente novamente.');
      }
  })
  .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao cadastrar o pet. Tente novamente.');
  });
});

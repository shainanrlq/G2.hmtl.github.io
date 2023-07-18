document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obter os valores do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  
  // Exibir os valores na console (pode ser substituído por um envio para o servidor)
  console.log('Nome: ' + nome);
  console.log('E-mail: ' + email);
  console.log('Senha: ' + senha);
  
  // Limpar o formulário após o envio
  document.getElementById('cadastroForm').reset();
});
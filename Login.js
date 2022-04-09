let dadosUsuario;

fetch('../usuarios.json').then(response => response.json()).then(body => {
  dadosUsuario = body.data
  init()
});

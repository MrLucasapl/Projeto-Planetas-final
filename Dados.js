let originalData;
let data;

fetch('../planetas.json').then(resposta => resposta.json()).then(body => {
  originalData = body.data
  data = [...originalData];
  init()
})

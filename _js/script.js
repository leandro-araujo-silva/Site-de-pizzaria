let prato = 'indefinido';
let bebida = 'indefinido';
let sobremesa = 'indefinido';

function escolhaFrango() {
  // Trocar a borda da section
  document.getElementById('section').style.borderColor = 'red';
  document.getElementById('section1').style.borderColor = 'white'
  prato = "Frango";
}

function escolhaCarne() {
  document.getElementById('section1').style.borderColor = 'red';
  document.getElementById('section').style.borderColor = 'white';
  prato = "Carne";
}

function escolhaCoca() {
  document.getElementById('section2').style.borderColor = 'red';
  document.getElementById('section3').style.borderColor = 'white';
  bebida = "Coca cola";
}

function escolhaRefri() {
  document.getElementById('section3').style.borderColor = 'red';
  document.getElementById('section2').style.borderColor = 'white';
  bebida = "Refresco";
}

function escolhaPudim() {
  document.getElementById('section4').style.borderColor = 'red';
  document.getElementById('section5').style.borderColor = 'white';
  sobremesa = "Pudim";
}

function escolhaSorvete() {
  document.getElementById('section5').style.borderColor = 'red';
  document.getElementById('section4').style.borderColor = 'white';
  sobremesa = "Sorvete";
}

function pedido() {
  // Pegar os produtos escolhidos
  // Montar uma frase com pedido
  // Integração com o whatsapp
  let mensagem = `Olá, gostaria de fazer o meu pedido: ${prato}, ${bebida} e ${sobremesa}.`;
  window.open(`https://api.whatsapp.com/send?phone=+5511998450000&text= ${mensagem}`);
}

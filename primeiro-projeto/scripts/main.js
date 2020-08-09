/*======================
       JavaScript
========================*/
let myImagem = document.querySelector("img");

myImagem.onclick = function (){
   let mySrc = myImagem.getAttribute('src');
   if(mySrc === 'imagens/logo1.png'){
      myImagem.setAttribute('src', 'imagens/imagens/logo2.png');
      myImagem.setAttribute('alt', 'raposa rosa');

   }else{
      myImagem.setAttribute('src', 'imagens/logo1.png');
      myImagem.setAttribute('alt', 'raposa vermelha');
   }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function definirNomeUsuario(){
   let meuNome = prompt('Seu nome');
   if(!meuNome || meuNome === null){
      definirNomeUsuario();
   }else{
      localStorage.setItem('nome', meuNome);
      meuCabecalho.textContent = 'Mozilla é legal. ' + meuNome;
   }
}


meuBotao.onclick = function (){
   definirNomeUsuario ();
}



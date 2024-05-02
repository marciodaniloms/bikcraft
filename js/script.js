//Ativar link do Menu
const links = document.querySelectorAll('.header-menu a'); //selecionando links do menu superior

function ativarLink(link){ //função pra cada um dos links
  const url = location.href;
  const href = link.href;

  if(url.includes(href)){ //verifica se href é igual a url
    link.classList.add('ativo') //adiciona uma classe
  }
}

links.forEach(ativarLink); 

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);


// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll('img');
console.log(imagensSite);
console.log(imagensSite[2]);
// Retorne no console apenas as imagens que começaram com a palavra imagem

// Selecione todos os links internos (onde o href começa com #)
//const linksInternos = documento.querySelectorAll('[href^="#"]')
// Selecione o primeiro h2 dentro de .animais-descricao
const h2animaisDescricao = document.querySelector('.animais-descricao h2')
console.log(h2animaisDescricao);

// Selecione o último p do site
const paragrafosTotal = document.querySelectorAll('p');
const tamPTotal = paragrafosTotal.length
console.log(tamPTotal)
console.log(paragrafosTotal[tamPTotal - 1]);

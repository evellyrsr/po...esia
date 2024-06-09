let palavra





function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}





function palavraAleatoria() {
     let palavras = ["Vendo pó...... esia", "Choveu...", "Dona Judith morreu!", "Hum-hum", "Se eu soubesse diria...", "Você viu meu outro chinelo?"];
  return random(palavras);
}





function inicializaCores() {
  
  background("black");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}





function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}





function draw() {
  
  inicializaCores();
 
  let poesia = palavraParcial(0, width);
  
  textSize(25);
  text(poesia, 200, 200);
  
}





// ideia para aplicativos de streamming
function sugestaoDeFilmePorNacionalidade(país) {
 //   filmes selecionados por listas prontas para rascunho
  let filmesBrasileiros = ["Limite", "Deus e o Diabo na Terra do Sol", "Cidade de Deus", "Macunaíma", "Central do Brasil"];
  let filmesArgentinos = ["Esperando la Carroza", "Camila", "A História Oficial", "Um Lugar no Mundo", "A Mulher Sem Cabeça"];
  let filmesPortuguêses = ["Amelia's Children", "Diálogos Depois do Fim", "Dispararon al pianista", "Crowrã", "Clandestina"];
  let filmesEUA = ["Cidadão Kane", "O Mundo a Seus Pés", "O Poderoso Chefão", "O Padrinho", "Casablanca"];
  
  let filmes = filmesBrasileiros + filmesArgentinos + filmesPortuguêses + filmesEUA;
  
  let filmeSugerido = random(filmes);
  
      return filmeSugerido;
  
}
$(function(){
  var LARGURA = 1200;
  var ALTURA = 800;
  var TAMANHO_NUVEM = 300;

  var canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  var context = canvas.getContext("2d");
  document.body.appendChild(canvas);

  var nuvem1 = new Nuvem(context, 400, 50, TAMANHO_NUVEM);
  var nuvem2 = new Nuvem(context, 0, 0, TAMANHO_NUVEM);
  var nuvem3 = new Nuvem(context, -100, 200, TAMANHO_NUVEM);
  var ceu = new Ceu(context, LARGURA, ALTURA);
  var grama = new Grama(context, LARGURA, ALTURA);
  var arvore = new Arvore(context, LARGURA, ALTURA);
  var passaros = new Passaros(context, LARGURA, ALTURA);
  var sol = new Sol(context, LARGURA, ALTURA);

  timer = setInterval(movimenta, 100);




  function movimenta(){
    nuvem1.reiniciaMovimento();
    nuvem2.reiniciaMovimento();
    nuvem3.reiniciaMovimento();
    nuvem1.deslocaNuvem();
    nuvem2.deslocaNuvem();
    nuvem3.deslocaNuvem();
    nuvem1.desenha();
    nuvem2.desenha();
    nuvem3.desenha();

    draw();
  }




  function draw() {
    ceu.desenha();
    grama.desenha();
    nuvem1.desenha();
    nuvem2.desenha();
    nuvem3.desenha();
    arvore.desenha();
    passaros.desenha();
    sol.desenha();
  }
});

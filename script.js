var calcMedias = `<iframe height="300" style="width: 100%;" scrolling="no" title="Calculadora de média" src="https://codepen.io/felipe-botero/embed/vYjOGMY?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/felipe-botero/pen/vYjOGMY">
Calculadora de média</a> by Felipe Botero (<a href="https://codepen.io/felipe-botero">@felipe-botero</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>`;

var mentalista = `<iframe height="300" style="width: 100%;" scrolling="no" title="Mentalista - ID3" src="https://codepen.io/felipe-botero/embed/gOzPzXx?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/felipe-botero/pen/gOzPzXx">
Mentalista - ID3</a> by Felipe Botero (<a href="https://codepen.io/felipe-botero">@felipe-botero</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>`;

var conversorMoedas = `<iframe height="300" style="width: 100%;" scrolling="no" title="Conversor de moedas - ID3" src="https://codepen.io/felipe-botero/embed/LYmGNdQ?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/felipe-botero/pen/LYmGNdQ">
Conversor de moedas - ID3</a> by Felipe Botero (<a href="https://codepen.io/felipe-botero">@felipe-botero</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>`;

var aluraFlix = `<iframe height="300" style="width: 100%;" scrolling="no" title="Flix1- ID3" src="https://codepen.io/felipe-botero/embed/gOzrYEq?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/felipe-botero/pen/gOzrYEq">
Flix1- ID3</a> by Felipe Botero (<a href="https://codepen.io/felipe-botero">@felipe-botero</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>`;
var listCampeonato = `<iframe height="300" style="width: 100%;" scrolling="no" title="Tabela de classificação" src="https://codepen.io/felipe-botero/embed/oNdLraM?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/felipe-botero/pen/oNdLraM">
Tabela de classificação</a> by Felipe Botero (<a href="https://codepen.io/felipe-botero">@felipe-botero</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>`;
var supTrunfo = `<iframe height="300" style="width: 100%;" scrolling="no" title="Super Trunfo - Dia 7" src="https://codepen.io/felipe-botero/embed/abGJdYL?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/felipe-botero/pen/abGJdYL">
Super Trunfo - Dia 7</a> by Felipe Botero (<a href="https://codepen.io/felipe-botero">@felipe-botero</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>`;
function mostrar(destino) {
  var space = document.getElementById("content");
  var modal = (document.getElementById("modal").style.display = "flex");

  space.innerHTML = destino;
  console.log(space);
}

function fechar() {
  var modal = document.getElementById("modal");
  var modal = (document.getElementById("modal").style.display = "none");
}

function alterarTema() {
  var container = document.getElementById("container");
  var img = document.getElementById("img");
  var mural = document.getElementById("mural");
  var botaoTema = document.getElementById("tema");

  container.classList.toggle("conteiner-dark");
  img.classList.toggle("img-dark");
  mural.classList.toggle("mural-dark");
  botaoTema.classList.toggle("button-dark");
}
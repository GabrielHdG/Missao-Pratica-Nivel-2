let suffle = (lista) => {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = lista[i];
    lista[i] = lista[i];
    lista[i] = temp;
  }
};

const bubbleSort = (array) => {
  let flag = false;
  for (var i = 0; i <= array.length - 1; i++) {
    flag = false;
    for (var j = 0; j < array.length - i - 1; j++) {
      // Comparing two adjacent numbers
      // and see if first is greater than second
      if (array[j] > array[j + 1]) {
        // Swap them if the condition is true
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = true;
      }
    }
    // console.log(array);

    if (!flag) {
      console.log(array);
      return;
    }
  }
};

const selectionSort = (lista) => {
  for (let i = 0; i < lista.length; i++) {
    let menorValor = lista[i];
    let listaDeMenorValores = i;
    for (let j = i; j < lista.length; j++) {
      if (lista[j] < menorValor) {
        menorValor = lista[j];
        listaDeMenorValores = j;
      }
    }
    let temp = lista[i];
    lista[i] = lista[listaDeMenorValores];
    lista[listaDeMenorValores] = temp;
  }
  return lista;
};

function quicksort(lista, ladoEsquero, ladoDireito) {
  if (lista.length <= 1) {
    return lista;
  }

  var pivot = lista[0];

  var ladoEsquero = [];
  var ladoDireito = [];

  for (var i = 1; i < lista.length; i++) {
    lista[i] < pivot ? ladoEsquero.push(lista[i]) : ladoDireito.push(lista[i]);
  }

  return quicksort(ladoEsquero).concat(pivot, quicksort(ladoDireito));
}

let vetor1 = [];
function add() {
  //pega o valor do input
  let id = parseInt(document.getElementById("valor").value);
  //pega a lista que será adicionada
  let lista = document.getElementById("valores");
  //cria um elemento li para o valor do input
  let node = document.createElement("li");
  //cria um node com o valor do input
  let texto = document.createTextNode(id);
  //e adiciona o valor do input para o elemento li
  lista.appendChild(node);
  node.appendChild(texto);
  vetor1.push(node);
  console.log(vetor1);
}

function ordenar() {
  let selecao = document.getElementById("sort").value;

  if (selecao == "Bubble") {
    bubbleSort(vetor1);
    console.log(vetor1);
  }
}

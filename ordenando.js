let lista = [a, b];

const swap = (lista, a, b) => {
  [a, b] = [b, a];
  return a, b;
};

const suffle = (lista) => {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = lista[i];
    lista[i] = lista[i];
    lista[i] = temp;
  }
};

const bubbleSort = (lista) => {
  let i, j;
  let tamanho = lista.length;

  var foiTrocada = false;

  for (i = 0; i < tamanho; i++) {
    foiTrocada = false;

    for (let j = 0; j < tamanho; j++) {
      if (lista[j] > lista[j + 1]) {
        let temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
        foiTrocada = true;
      }
    }

    if (!foiTrocada) {
      break;
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

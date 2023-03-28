let valuesArray = [];

function add() {
  let inputValue = parseFloat(document.getElementById("inputValue").value);
  valuesArray.push(inputValue);
  document.getElementById("inputValue").value = "";
  updateList();
}

function updateList() {
  let listElement = document.getElementById("valores");
  listElement.innerHTML = "";
  for (let i = 0; i < valuesArray.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = valuesArray[i];
    listElement.appendChild(listItem);
  }
}

const misturarOVetor = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

function misturar() {
  valuesArray = misturarOVetor(valuesArray);
  updateList();
}

const bubbleSort = (vetor) => {
  let len = vetor.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }
  return vetor;
};

const selectionSort = (vetor) => {
  let len = vetor.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = vetor[i];
      vetor[i] = vetor[minIndex];
      vetor[minIndex] = temp;
    }
  }
  return vetor;
};

const partition = (vetor, esquerda, direita) => {
  let pivot = vetor[Math.floor((esquerda + direita) / 2)];
  let i = esquerda;
  let j = direita;

  while (i <= j) {
    while (vetor[i] < pivot) {
      i++;
    }
    while (vetor[j] > pivot) {
      j--;
    }
    if (i <= j) {
      let temp = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = temp;
      i++;
      j--;
    }
  }
  return i;
};

const quickSortHelper = (vetor, esquerda, direita) => {
  if (vetor.length > 1) {
    let index = partition(vetor, esquerda, direita);
    if (esquerda < index - 1) {
      quickSortHelper(vetor, esquerda, index - 1);
    }
    if (index < direita) {
      quickSortHelper(vetor, index, direita);
    }
  }
  return vetor;
};

function ordenar() {
  let sortOption = document.getElementById("sortOption").value;
  if (sortOption === "bubble") {
    valuesArray = bubbleSort(valuesArray);
  } else if (sortOption.value === "selection") {
    valuesArray = selectionSort(valuesArray);
    console.log(valuesArray);
  } else sortOption.value === "quick";
  {
    valuesArray = quickSortHelper(valuesArray, 0, valuesArray.length - 1);
  }
  updateList();
}

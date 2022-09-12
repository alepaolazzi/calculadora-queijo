const numeros = document.querySelectorAll(".numeros button");
const peso = document.querySelector("#peso");
const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");
const apagar = document.querySelector("#apagar");

let num = 0;

function recebeNumero(e) {
  let numerosEntrada = e.target.textContent;
  if (numerosEntrada === "Novo") {
    console.log("Limpei");
    clear();
  } else {
    peso.value += numerosEntrada;
  }
}

function realizaCalculo() {
  calcular.setAttribute("disabled", "");
  apagar.setAttribute("disabled", "");
  if (peso.value.includes(".")) {
    num = parseFloat(peso.value) * 18;
    console.log(num);
  } else {
    num = parseFloat((peso.value / 1000) * 18);
    console.log(num);
  }
  if (num < 100) {
    resultado.innerText = `R$ ${Math.round(num)},00`;
  } else {
    resultado.innerText = "Valor muito alto!";
  }
}

function removeUltimo() {
  peso.value = peso.value.substring(0, peso.value.length - 1);
  console.log(peso.value);
}

function clear() {
  peso.value = "";
  resultado.innerText = "\u00A0";
  num = 0;
  calcular.removeAttribute("disabled");
  apagar.removeAttribute("disabled");
}

numeros.forEach((e) => {
  e.addEventListener("click", recebeNumero);
});

calcular.addEventListener("click", realizaCalculo);

apagar.addEventListener("click", removeUltimo);

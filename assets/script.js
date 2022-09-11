const numeros = document.querySelectorAll(".numeros button");
const peso = document.querySelector("#peso");
const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

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
    resultado.innerText = "Valor muito alto! Tente novamente";
  }
}

function clear() {
  peso.value = "";
  resultado.innerText = "";
  num = 0;
  calcular.removeAttribute("disabled");
}

numeros.forEach((e) => {
  e.addEventListener("click", recebeNumero);
});

calcular.addEventListener("click", realizaCalculo);

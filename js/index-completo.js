const generateCell = () => {
  for (let i = 0; i < 76; i++) {
    const cellTombolaDiv = document.createElement("div");
    cellTombolaDiv.className = "single-cell-tombola";

    const cellTombolaH3 = document.createElement("h3");
    cellTombolaH3.innerText = i + 1;
    cellTombolaDiv.appendChild(cellTombolaH3);
    const conteinerDiv = document.querySelector("#tabellone");
    conteinerDiv.appendChild(cellTombolaDiv);
  }
};

// creazione array da cui verranno pescati i numeri e grazie al metodo splice il numero
// random selezionato verrà eliminato dall'array, quindi non potrà essere richiamato
const arrayNumeriEstratti = [];
for (let i = 0; i < 76; i++) {
  arrayNumeriEstratti.push(i + 1);
}

const generateRandom = () => {
  const numRandom = Math.floor(Math.random() * arrayNumeriEstratti.length);
  const random = arrayNumeriEstratti.splice(numRandom, 1)[0];
  console.log(arrayNumeriEstratti);
  const h3ContenentNumeroEstratto = document.querySelector(".numero-estratto h3");
  h3ContenentNumeroEstratto.innerText = random;

  const cellTombolaH3s = document.querySelectorAll(".single-cell-tombola h3");
  cellTombolaH3s[random - 1].parentNode.style = "background-color:red;";
  cellTombolaH3s[random - 1].style = "color: white;";

  const cellaCartellaH3 = document.querySelectorAll(".single-cell-cartella h3");
  for (let i = 0; i < cellaCartellaH3.length; i++) {
    if (parseInt(cellaCartellaH3[i].innerText) === random) {
      cellaCartellaH3[i].parentNode.style = "background-color:red;";
      cellaCartellaH3[i].style = "color: white;";
    }
  }
};

const buttonEstrazione = document.querySelector(".container button");
buttonEstrazione.addEventListener("click", e => {
  generateRandom();
});

const generateCartellaPlayer = () => {
  const arrayNumeriCartella = [];
  for (let i = 0; i < 24; i++) {
    const cellCartellaDiv = document.createElement("div");
    cellCartellaDiv.className = "single-cell-cartella";
    const cellCartellaH3 = document.createElement("h3");

    const numeroCartella = Math.floor(Math.random() * 76 + 1);

    if (!arrayNumeriCartella.includes(numeroCartella)) {
      arrayNumeriCartella.push(numeroCartella);
    } else {
      do {
        const numeroCartella = Math.floor(Math.random() * 76 + 1);
        arrayNumeriCartella.push(numeroCartella);
      } while (!arrayNumeriCartella.includes(numeroCartella) && arrayNumeriCartella.length < 24);
    }
    cellCartellaH3.innerText = numeroCartella;
    cellCartellaDiv.appendChild(cellCartellaH3);
    const containerDiv = document.querySelector(".cartella-container");
    containerDiv.appendChild(cellCartellaDiv);
    const cartellaContainerGeneral = document.querySelector(".cartella-container-general");
    cartellaContainerGeneral.appendChild(containerDiv);
  }
};

const buttonInput = document.querySelector(".input-cartella button");
buttonInput.addEventListener("click", () => {
  numberOfCartella();
});

const input = document.querySelector("input");
console.log(input.value);

const numberOfCartella = () => {
  const input = document.querySelector("input");
  let valueInputNum = parseInt(input.value);
  if (isNaN(valueInputNum) && valueInputNum <= 0) {
    alert("inserisci un numero valido");
  }
  for (let i = 0; i < valueInputNum; i++) {
    generateCartellaPlayer();
  }
};

window.onload = () => {
  generateCell();
  numberOfCartella();
  // generateCartellaPlayer();
};

const generateCell = () => {
  for (let i = 0; i < 76; i++) {
    const cellTombolaDiv = document.createElement("div");
    cellTombolaDiv.className = "single-cell-tombola";

    const cellTombolaH3 = document.createElement("h3");
    cellTombolaH3.innerText = i + 1;
    cellTombolaDiv.appendChild(cellTombolaH3);
    const conteinerDiv = document.querySelector("#calendar");
    conteinerDiv.appendChild(cellTombolaDiv);
  }
};

const arrayNumeriEstratti = [0];

const buttonEstrazione = document.querySelector("button");
buttonEstrazione.addEventListener("click", e => {
  const numeroEstratto = Math.floor(Math.random() * 76 + 1);

  if (!arrayNumeriEstratti.includes(numeroEstratto)) {
    arrayNumeriEstratti.push(numeroEstratto);
    const h3ContenentNumeroEstratto = document.querySelector(".numero-estratto h3");
    h3ContenentNumeroEstratto.innerText = numeroEstratto;

    const cellTombolaH3s = document.querySelectorAll(".single-cell-tombola h3");
    cellTombolaH3s[numeroEstratto - 1].parentNode.style = "background-color:red;";
    cellTombolaH3s[numeroEstratto - 1].style = "color: white;";

    // const cellCartellaH3s = document.querySelectorAll(".cartella-container h3");
    // cellCartellaH3s[numeroEstratto - 1].parentNode.style = "background-color:red;";
    // cellCartellaH3s[numeroEstratto - 1].style = "color: white;";
  }
});

const generateCartellaPlayer = () => {
  const arrayNumeriCartella = [];
  for (let i = 0; i < 24; i++) {
    const cellCartellaDiv = document.createElement("div");
    cellCartellaDiv.className = "single-cell-tombola";

    const cellCartellaH3 = document.createElement("h3");
    const numeroCartella = Math.floor(Math.random() * 76 + 1);

    if (!arrayNumeriCartella.includes(numeroCartella) && numeroCartella !== 0) {
      arrayNumeriCartella.push(numeroCartella);
      cellCartellaH3.innerText = numeroCartella;
    }

    cellCartellaDiv.appendChild(cellCartellaH3);
    const containerDiv = document.querySelector(".cartella-container");
    containerDiv.appendChild(cellCartellaDiv);
  }
};

window.onload = () => {
  generateCell();
  generateCartellaPlayer();
};

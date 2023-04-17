const contenitore = document.getElementById("container");

for (let contatore = 0; contatore < 100; contatore++) {

    let numeroVisualizzato = contatore + 1;
    console.log(`Contatore vale:${contatore} - Stampo ${numeroVisualizzato}`);

    let numero = numeroVisualizzato;

    contenitore.innerHTML += `<div class="box">${numero}</div>`;
}

console.log(contenitore.innerHTML);



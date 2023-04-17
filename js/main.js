const contenitore = document.getElementById("container");

for (let contatore = 1; contatore < 100; contatore++) {

    // let numeroVisualizzato = contatore + 1;
    // console.log(`Contatore vale:${contatore} - Stampo ${numeroVisualizzato}`);

    let numero = contatore;

    

    if (numero % 3 == 0) {
        console.log(`Fizz`);
        contenitore.innerHTML += `<div class="box box-3">Fizz</div>`;

    } else if (numero % 5 == 0) {
        console.log(`Buzz`);
        contenitore.innerHTML += `<div class="box box-5">Buzz</div>`;

    } else if (numero % 15 == 0) {
        console.log(`FizzBuzz`);
        contenitore.innerHTML += `<div class="box box-S">FizzBuzz</div>`;
        
    } else {
        console.log(`numero`)
        contenitore.innerHTML += `<div class="box">${numero}</div>`;
    }
}







const contenitore = document.getElementById("container");

for (let contatore = 1; contatore < 100; contatore++) {

    // let numeroVisualizzato = contatore + 1;
    // console.log(`Contatore vale:${contatore} - Stampo ${numeroVisualizzato}`);

    // let numero = contatore;

    

    if (contatore % 3 == 0){
        console.log(`Fizz`);
        contenitore.innerHTML += `<div class="box box-3">Fizz</div>`;

    } else if (contatore % 5 == 0){
        console.log(`Buzz`);
        contenitore.innerHTML += `<div class="box box-5">Buzz</div>`;

    // } else if (contatore % 15 == 0){
    //     console.log(`FizzBuzz`);
    //     contenitore.innerHTML += `<div class="box box-S">FizzBuzz</div>`;
        
    } else {
        console.log(`contatore`)
        contenitore.innerHTML += `<div class="box">${contatore}</div>`;
    }
}







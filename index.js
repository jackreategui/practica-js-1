const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const boton = document.querySelector('#boton');
const pResultado = document.querySelector('#resultado');

// formulario.addEventListener('submit', sumarInput);

// function sumarInput(event) {
//     // console.log({event});
//     event.preventDefault();
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResultado.innerHTML = "Resultado: " + sumaInputs;
// }

boton.addEventListener('click', sumarInput);

function sumarInput(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResultado.innerHTML = "Resultado: " + sumaInputs;
}
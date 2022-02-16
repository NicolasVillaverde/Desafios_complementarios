console.log(`Desafio complementario Tema: Tabla de multiplicar`);

let numero = parseInt(prompt(`Ingrese un numero para obtener su tabla de multiplicar`));

for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
}

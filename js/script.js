//Verificar o tipo da variavel
let nome = 'Johnny';
console.log(typeof nome);

// Conversoes de tipo
let numero1 = '1';
let numero2 = 2;

parseInt(numero1);
parseFloat(numero1);

String(numero2);
Number(numero1);

// Arrow Functions
function name() {}
const somar = () => {};
somar();

let nome2 = 'Maria';

if (nome2.length > 5) {
   console.log('Maior que 5');
} else {
   console.log('Menor que 5');
}

// Operador ternario
nome2.length > 5 ? console.log('Maior que 5') : console.log('Menor que 5');

// for in of

let frutas = ['Banana', 'Maça', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
   frutas[i];
}

for (const indice in frutas) {
   console.log(frutas[indice]);
}

for (const fruta of frutas) {
   console.log(fruta);
}

//Concatenar
let empresa = '   Pulsati     ';
empresa = empresa.concat('Desenvolvimento Web');

// CharAt
let primeiraLetra = empresa.charAt(0);

// indeOf
let posiicaoDoI = empresa.indexOf('ti');

// Remover espacos nos cantos
let empresaLimpa = empresa.trim();

// Substring
let escola = 'Luiz Delfino';

let primeiroNome = escola.substring(0, 4);
let ultimoNome = escola.substring(5);

// Split
let linha = 'Johnny;johnny@gmail.com;992196789';

let dados = linha.split(';');

console.log(dados[0]);
console.log(dados[1]);
console.log(dados[2]);

// Join
dados[0] = 'José';
let linhaAlterada = dados.join(';');

// StartWith Ends With

let escola2 = 'Apex';

escola2.startsWith('A');
escola2.endsWith('ex');

// toUpperCase toLowerCase

let nome3 = 'Johnny';

nome3.toUpperCase();
nome3.toLowerCase();

// Replace
nome3.replace('n', 'e'); // joheny

// Arrays
let nomes = [];

nomes.push('Johnny');
nomes.push('Amanda');
nomes.push('Kaue');
nomes.splice(0, 1);

nomes.pop();

let nomesOrdenados = nomes.sort().reverse();

let numeros = [10, 1, 20, 50, 5, 70, 1, 1, 90];

let numerosOrdenados = numeros
   .sort((a, b) => {
      return a - b;
   })
   .reverse();

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMultiplicados = numeros2.map((numero) => {
   return numero * 2;
});

let numerosPares = numeros2.filter((numero) => {
   return numero % 2 === 0;
});

let existeAlgumPar = numeros2.some((numero) => {
   return numero % 2 === 0;
});

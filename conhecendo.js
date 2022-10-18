//const texto = "Óla Mundo";
//console.log(texto);


//const numeroTexte = 35;
//const numerosTextes = "35";

//console.log (numeroTexte + numerosTextes);

// Parametros de Funções
//const numeroSoma = 5;
//const numeroSomas = 5;

//console.log (numeroSoma +numeroSomas);

//function soma (numero1, numero2) {
   // return numero1 + numero2
//}

//console.log (soma (2, 2));
//console.log (soma (234,4));
//console.log (soma (20,2));



//function nomeIdade (nome,idade) {
   // return 'meu nome é ${nome} e minha idade é ${idade}'; 
//}
//console.log (nomeIdade("Cristina", 53));

//function mutiplica(numero1, numero2) {
    //return numero1 * numero2;
//}

//console.log (mutiplica) (soma(5,5), soma(3,3));

//const num = 10;

//if (num === null) {
// console.log('número não fornecido');
//}

//const num = 10;

//if (num !== null) {
 //console.log(`o número é ${num}`);
//}

//const num1 = 5;
//const num2 = 5;
//const resultado = num1 + num2;

// refaturando
//function soma(num1, num2) {
    //return num1 + num2;
   //}
   
   //console.log(soma(5, 5))


   // calculando media
//let nota1 = 10
//let nota2 = 5
//let nota3 = 7
//let nota4 = 6

//const notas = [10,5, 7, 6]

//let media = (nota1 + nota2 + nota3 + nota4)/4;


//let media = (notas [0]+ notas [1]+ notas [2] +notas[3])/ notas.length

//console.log (media)
    
    // strings

    //const arrayDeNumeros = [50, 43, 12];

//const arrayDeStrings = ["Laranja", "alura", "Cristina"];

//console.log ( arrayDeStrings)

// INCUINDO NOVO ELEMENTO NA LISTA

//const  nota = [10, 5, 7];
//nota.push (7);

//console.log (nota)

//let mediaFinal = (nota [0] +nota [1]+ nota[2]+ nota[3])/nota.length

//console.log (mediaFinal)

//const valorNotas = [10,8,9,5,7];
//valorNotas.pop();

//console.log(valorNotas)

 //let mediaAnual = (valorNotas[0]+ valorNotas[1]+ valorNotas[2] + valorNotas[3])/valorNotas.length

//console.log(`A média é ${mediaAnual}`)

// Divindo um lista (arrays)
//const nomes = [Maria, Lucia, João, Andre, Ricardo, Ronildo, Lucas, Gabriela, Sandra ,Cezar,
//Cristina, Carmem, Andressa, Renan, Ester, Daniela, Kiara, Penellope, Marcos,Nelson, Daniel ]

//const sala1 = nomes.slice(0,nomes.length/2);
//const sala2 = nomes.slice(nomes.length/2);

//console.log(${sala1})
//console.log(${sala2})


//const listaDeChamada = [Joao, Caio, Debora, Luiz, Paulo];
//listaDeChamada.splice(1,2,"Cristina");

//console.log(listaDeChamada)


//const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
//const arrayConcat = arrayOriginal.concat("André", "Fernanda")

//console.log(arrayConcat)
//console.log(arrayOriginal)


//Laços de repitição for

//for (let i = 0; i <= 10; i++){
    //console.log(i)
   //}

   //
   //for (let i = 0; i < 10; ){
    //console.log(i)
   //}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length;

console.log (media)


const nome = "Alura";
// ["A", "l", "u", "r", "a"]

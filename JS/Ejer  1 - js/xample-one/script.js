//Pedir al usuario números hasta que ingrese la letra q. Guardar los números en un array
function getNumbers(){

  let numeros = []; 
  let numeroIngresado = null; 
  
   
  while (numeroIngresado != 'q') {
    numeroIngresado = prompt(" 1- Ingrese un numero: \nPara salir ingrese 'q' ");

    if (!isNaN(parseInt(numeroIngresado))) {
      numeros.push(numeroIngresado);   
    }
     
  } 
  alert(`Lo numeros ingresados son : ${numeros}`); 
}

let btn1 = document.getElementById('ejercicio1');
btn1.addEventListener("click", getNumbers);    



//Mostrar los números ingresados por el usuario multiplicados por 2
/*function multip(){

  let numeros=[]; 
          
  do {
   info = prompt("2 -Ingrese un numero: \nPara salir ingrese 'q' ")
   numeros.push(info);    
  } while (info !='q') 
   alert('Saliste del programa!');
    
   numeros = numeros.map(info=>Number(info)*2).filter(info=>Number(info));
    
   alert(`Los numeros ingresados multiplicados por 2: ${numeros}`);
}
    
multip();*/

//Mostrar los números ingresados por el usuario multiplicados por 2
function multip(){
  
  let numeros = [];
  let numeroIngresado = null;

  while (numeroIngresado != 'q'){
    numeroIngresado = prompt(" 2 - Ingrese un numero: \nPara salir ingrese 'q' ");

    if (!isNaN(parseInt(numeroIngresado))) {
      numeros.push(numeroIngresado);

    }

  }
  alert(`Los numeros ingresados son:  ${numeros}`);
}

let btn2 = document.getElementById('ejercicio2');
btn2.addEventListener("click", multip); 




// // numeros primos    
// function numPrimos(n){
// if
// } 



// Devolver si existe un elemento dentro del array

let numeros = [];  
    
if (numeros.length = 0){
  alert('3 - El Array esta vacio');
} else {
alert('3 - El Array tiene contenido');
}



//Filtrar todos los elementos que no sean de tipo numerico
function filterNotNumber(){

var numeros = [];
var solonumeros = numeros.filter(numbersOnly);
            
do {
   info = prompt(" 4- Ingrese un numero: \nPara salir ingrese 'q' ")
   numeros.push(info);   
} while (info !='q') 
   alert('Saliste del programa!');
    
  document.write(solonumeros);

  function numbersOnly(value) {
  if (typeof (value) === 'number') {
    return value;
  }
  }
   alert(`Los elementos ingresados que no son numericos son: ${solonumeros}`)
}
      
filterNotNumber();



//Ordenar los elementos de menor a mayor
function orderNumber(){

  var numeros=[]; 
              
  do {
     info = prompt(" 5- Ingrese un numero: \nPara salir ingrese 'q' ")
     numeros.push(info);    
  } while (info !='q')  
  alert('Saliste del programa!'); 
  numeros.sort();
  numeros = numeros.map(info=>Number(info)).filter(info=>Number(info));
  alert(`Los caracteres ingresados numericos ordenados de menor a mayor son: ${numeros}`)
  alert('Hasta la proxima, cerrando...'); 
}

orderNumber();



//-----------------------------------------------------------------------



//Pedir los datos un usuario y crear la estructura mencionada

class persona{
  constructor(nombre, apellido, dni){
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
  }
}



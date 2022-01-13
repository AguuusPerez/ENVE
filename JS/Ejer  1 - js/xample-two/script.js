//Crear un array con los siguientes valores:  1,3,”a”,[1,2]
function createArray(){
    let array = [1, 3, "a", [1, 2]];
    
    alert(array);
}

let btn1 = document.getElementById('exercise1');
btn1.addEventListener("click", createArray);



//Pedir al usuario números hasta que ingrese la letra q. Guardar los números en un array
function getNumbers(){

 let numbers = []; 
 let inputNumbers = null; 
         
    while (inputNumbers != 'q') {
      inputNumbers = prompt(" Ingrese un numero: \nPara salir ingrese 'q' ");
  
      if (!isNaN(parseInt(inputNumbers))) {
        numbers.push(inputNumbers);   
      }
       
    } 
    alert(`Lo numeros ingresados son : ${numbers}`); 
}
  
let btn2 = document.getElementById('exercise2');
btn2.addEventListener("click", getNumbers);



//Mostrar los numeros ingresados por el usuario multiplicados por 2
function multiply(){

    let numbers = []; 
    let inputNumbers = null; 
         
    while (inputNumbers != 'q') {
      inputNumbers = prompt(" Ingrese un numero: \nPara salir ingrese 'q' ");
  
      if (!isNaN(parseInt(inputNumbers))) {
        numbers.push(inputNumbers);   
      }
       
    } 
    alert(`Lo numeros ingresados son : ${numbers}`); 


    for ( index = 0; index < numbers.length; index++) {
        let multiplyNumbers = numbers[index]*2;
        alert(`El numero ingresado multiplicado por dos es: ${multiplyNumbers}`);
    }
}

let btn3 = document.getElementById('exercise3');
btn3.addEventListener("click", multiply);



//Mostrar los elementos del array que son primos
function primo(){

    let numbers = []; 
    let inputNumbers = null; 
    let esNumeroPrimo = true;

    while (inputNumbers != 'q') {
      inputNumbers = prompt(" Ingrese un numero: \nPara salir ingrese 'q' ");
  
      if (!isNaN(parseInt(inputNumbers))) {
        numbers.push(inputNumbers);   
      }
       
    } 
    alert(`El numero ingresado es : ${numbers}`); 
    
    for (let index = 2; index < numbers/2; index++) { //arranque desde 2 por que cualquier num es divisible por 0 y 1

        if(numbers % index === 0){
            esNumeroPrimo = false;
        }
        
    }
    
    if(esNumeroPrimo){
        alert("Es numero primo", numbers);
    }else{
        alert("No es numero primo", numbers);
    } 

}

let btn4 = document.getElementById('exercise4');
btn4.addEventListener("click", primo);


//Devolver si existe un elemento dentro del array
function elementExist(){

    let numbers = []; 
    let inputNumbers = null;
    

    while (inputNumbers != 'q') {
      inputNumbers = prompt(" Ingrese un numero: \nPara salir ingrese 'q' ");
  
      if (!isNaN(parseInt(inputNumbers))) {
        numbers.push(inputNumbers);   
      }
             
    } 
    alert(`El numero ingresado es : ${numbers}`); 
        
    if (numbers.length == 0){
        alert('El array esta vacio');
    }else{
        alert('El array tiene contenido');
    }    
       
}

let btn5 = document.getElementById('exercise5');
btn5.addEventListener("click", elementExist);



// Filtrar todos los elementos que no sean de tipo numerico
function filterNumbers(){

    let numbers = []; 
    let inputNumbers = null;
    

    while (inputNumbers != 'q') {
      inputNumbers = prompt(" Ingrese un numero: \nPara salir ingrese 'q' ");
  
      if (!isNaN(parseInt(inputNumbers))) {
        numbers.push(inputNumbers);   
      }
             
    } 
    alert(`El numero ingresado es : ${numbers}`); 

    return numbers.filter(inputNumbers => Number(inputNumbers));
}

let btn6 = document.getElementById('exercise6');
btn6.addEventListener("click", filterNumbers);



// Ordenar los elementos de menor a mayor
function orderNumber(){
    let numbers = []; 
    let inputNumbers = null;
    

    while (inputNumbers != 'q') {
      inputNumbers = prompt(" Ingrese un numero: \nPara salir ingrese 'q' ");
  
      if (!isNaN(parseInt(inputNumbers))) {
        numbers.push(inputNumbers);   
      }
            
    }
    numbers.sort();  
    alert(`Los numeros ingresados de menor a mayor son : ${numbers}`);

}

let btn7 = document.getElementById('exercise7');
btn7.addEventListener("click", orderNumber);



//-------------------------------------------------------------------------

function inputData(){
  
  let name = prompt("Ingrese su nombre: ");
  let apellido = prompt("Ingrese su apellido: ");
  let dni = prompt("Ingrese su DNI: ");
  let dniEsPar = {};  // booleano: true o false. No se si declararlo boolean, o definir directamente si es truo o false? 
  let nombreCompleto = {};


  let data = {};                 //  Guardar info que ingresa el usuario
  data.name = {name};            
  data.apellido = {apellido};
  data.dni = {dni};  


  if (dni % 2 == 0){              // Al finalizar la carga, agregar un nuevo campo “dniEsPar” (booleano) si el dni es par o no
    alert(`El DNI numero ${dni} es par!`);    
  }else{
    alert(`El DNI numero ${dni} es impar!`);
  }


  data.dniEsPar = {dniEsPar};    // Agregando campo dniEsPar
  

  delete data.name;              // Eliminar el campo nombre y apellido
  delete data.apellido;


  data.nombreCompleto = {name,apellido};  // crear un nuevo campo “nombreCompleto”


  let dataJson = JSON.stringify(data.nombreCompleto);     // Me devuelve nombre + apellido 
  alert(dataJson);

  console.log(typeof(dataJson));

}

let btn8 = document.getElementById('exercise8');
btn8.addEventListener("click", inputData);

let nombre = document.getElementById("name");
let mail = document.getElementById("mail");
let textarea = document.getElementById("textarea")
let form = document.getElementById("form"); 

form.addEventListener("submit", e=>{    //evento cuando se envie, quiero que ejecute mi funcion e

    let expresionesRegulares = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    // Validacion que sea un nombre valido
    if(nombre.value.length < 5){
        alert("El nombre ingresado no es valido!");   
        e.preventDefault()  // para que no se envide por default  y quede estatico    
    } 

    // Validacion de que el email ingresado sea real 
     if(!expresionesRegulares.test(mail.value)){   //method .test compara contra la expresion regular, retorna true o false  
        alert("El mail ingresado es invalido!");
        e.preventDefault()
    } 

    // Validar que ingrese una consulta a resolver
    if(textarea.value.length < 5){
        alert("Por favor, ingrese su consulta");
        e.preventDefault()
    } 

})
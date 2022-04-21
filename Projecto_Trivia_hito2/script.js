//Presionar el botón Comenzar
var btnInicio = document.getElementById ('start');
btnInicio.addEventListener('click', showQuestions); 

//Obteniendo los divs: header y section mediante su id
var header= document.getElementById('inicio');
var section= document.getElementById('preguntas');

//Ocultando la parte de las preguntas
section.style.display = 'none';

//Ocultando la pagina principal para mostrar las preguntas
function showQuestions(){
    header.style.display = 'none';
    section.style.display = 'block';

    //Guardando el nombre del usuario
    var nombreUsuario = document.getElementById('nombre');
    if (nombreUsuario.value){
        document.getElementById('bienvenida').innerText = 'Bienvenido(a)! '+ nombreUsuario.value;
    }
}

//Al apretar el botón mostrar respuesta y ver resultados
var resultButton = document.getElementById ('result-button');
resultButton.addEventListener('click', clickButton); 

//Segunda pestaña
function clickButton (){
    //Guardando las alternativas seleccionadas por el usuario
    var radios1 = document.getElementsByName('q1');

    for (var i = 0, length = radios1.length; i < length; i++) {
        if (radios1[i].checked) {
            var answer1 = radios1[i].value
    break;}
        }
    
    var radios2 = document.getElementsByName('q2');

    for (var i = 0, length = radios2.length; i < length; i++) {
        if (radios2[i].checked) {
            var answer2 = radios2[i].value
    break;}
        }
    
    var radios3 = document.getElementsByName('q3');

    for (var i = 0, length = radios3.length; i < length; i++) {
        if (radios3[i].checked) {
            var answer3 = radios3[i].value
    break;}
        }

    // alert (`Seleccionaste 1. ${answer1}, 2. ${answer2} y 3. ${answer3}`+ '\nLas respuestas correctas son: 1. Fósforo: P, 2. Falso y 3. Helio');

    //Llamando al div que contenerá las respuestas
    var respuestas = document.getElementById ('respuestas');

    //Creando los elementos li donde irán todas las respuestas
    var li01 = document.createElement ('li');
    var li02 = document.createElement ('li');
    var li03 = document.createElement ('li');

    // Corrigiendo las respuestas del usuario 
    if (answer1 === 'Hidrógeno: H2'){
        li01.textContent = 'Tu respuesta es correcta!'
    } else{
        li01.textContent = 'Oh no!, inténtalo otra vez'
    }
    
    if (answer2 === 'Falso'){
        li02.textContent = 'Tu respuesta es correcta!'
    } else{
        li02.textContent = 'Oh no!, inténtalo otra vez'
    }
    
    if (answer3 === 'Helio'){
        li03.textContent = 'Tu respuesta es correcta!'
    } else{
        li03.textContent = 'Oh no!, inténtalo otra vez'
    }

    respuestas.appendChild (li01);
    respuestas.appendChild (li02);
    respuestas.appendChild (li03);
   }

// Evitando que la página se refresque cuando envie el formulario
var form = document.getElementById ('formulario');

form.addEventListener('submit', function (event){
    event.preventDefault();
})

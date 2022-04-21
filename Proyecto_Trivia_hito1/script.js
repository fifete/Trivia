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
    if (section.style.display === 'none'){
        header.style.display = 'none';
        section.style.display = 'block';
    }
}
//Apretar el botón mostrar respuesta y ver resultados
var resultButton = document.getElementById ('result-button');
resultButton.addEventListener('click', clickButton); 


function clickButton (){
    //Guardando la opción seleccionada por el usuario
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

    alert (`Seleccionaste 1. ${answer1} y 2. ${answer2}`+ '\nLas respuestas correctas son: 1. Fósforo: P y 2. Falso');
   }
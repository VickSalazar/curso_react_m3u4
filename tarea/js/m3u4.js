// Ejercicio 1

const objDivColores = document.getElementsByClassName("div-color");

var i = 0, length = objDivColores.length;

for (i; i < length; i++) {
   objDivColores[i].addEventListener('click', function onClick() {  
    // var bgColor = this.style.backgroundColor; no anda, da el valor undefined, entonces tuve que googlear y encontrar lo de abajo
    var bgColor = window.getComputedStyle(this, null).backgroundColor; 
    // alert("the backgroundColor is, FINALLY:  " + bgColor);
    document.body.style.backgroundColor = bgColor;   
  });
}

// Ejercicio 2
const CANTIDAD_CARACTERES_MAX = document.getElementById('mensaje').maxLength;

document.getElementById("mensaje").addEventListener("keyup", () => {
  var objMensaje = document.getElementById('mensaje');
  var objCaracteresRestantes = document.getElementById('caracteres_restantes');
  var carFaltan = CANTIDAD_CARACTERES_MAX - objMensaje.value.length;
  objCaracteresRestantes.textContent = carFaltan;
});

// Ejercicio 3

var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];
const botonAlumnos = document.getElementById("botonAlumnos");

botonAlumnos.addEventListener('click', function onClick() {
  let alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7).map(registro => registro.nombre);

  document.getElementById("alumnos").innerHTML = alumnosAprobados;

});
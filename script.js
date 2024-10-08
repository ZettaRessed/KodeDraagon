document.querySelectorAll('.level').forEach(level => {
            level.addEventListener('click', () => {
              alert('¡Has seleccionado el nivel de maestría ' + level.textContent + '!');
            });
          });

          document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
              const action = e.target.textContent.toLowerCase();
              if (action.includes('comprar')) {
                const cost = parseInt(action.match(/\d+/)[0]);
                alert(`¿Estás seguro de que quieres comprar este item por ${cost} Debug Dollars?`);
              } else if (action === 'inscribirse') {
                alert('¡Te has inscrito con éxito en el próximo torneo!');
              } else {
                alert('¡Desafío iniciado! Buena suerte.');
              }
            });
          });
document.querySelectorAll('.btn-completar').forEach(boton => {
  boton.addEventListener('click', () => {
    // Cambiar el estilo del botón
    boton.classList.add('completado'); 
    boton.textContent = '¡Completado!';

    // Cambiar el estilo del nivel
    const nivel = boton.closest('.level'); // Encontrar el div del nivel
    nivel.classList.add('completado'); 

    // Almacenar el progreso (opcional)
    // ...
  });
});

  function mostrarContenidoNivel(lenguaje, nivel) {
  // Ocultar todo el contenido de niveles
  var contenidosNiveles = document.querySelectorAll('.nivel-contenido');
  for (var i = 0; i < contenidosNiveles.length; i++) {
    contenidosNiveles[i].style.display = "none";
  }

  // Mostrar el contenido del nivel seleccionado
  var idNivel = lenguaje + '-nivel-' + nivel;
  document.getElementById(idNivel).style.display = "block";
}

  document.querySelectorAll('.level-button').forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target.classList.contains('locked')) {
        alert('Este nivel aún está bloqueado. ¡Completa los niveles anteriores para desbloquearlo!');
      } else {
        alert('¡Has seleccionado el ' + e.target.textContent + '! ¡Buena suerte en tu aprendizaje de Python!');
      }
    });
  });
function mostrarContenido(id) {
      // Ocultar todo el contenido
      var contenidos = document.getElementsByClassName("contenido");
      for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
      }

      // Mostrar el contenido seleccionado
      document.getElementById(id).style.display = "block";
    }

    // Mostrar el contenido de inicio por defecto
    mostrarContenido('inicio');

    document.querySelectorAll('.level-button').forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.classList.contains('locked')) {
          alert('Este nivel aún está bloqueado. ¡Completa los niveles anteriores para desbloquearlo!');
        } else {
          alert('¡Has seleccionado el ' + e.target.textContent + '! ¡Buena suerte en tu aprendizaje!');
        }
      });
    });

const levelInfo = {
            1: "Nivel 1: 'Hola, Mundo!' (Introducción a C#, instalación de Visual Studio o .NET SDK, primer programa 'Hola, Mundo!')",
            2: "Nivel 2: 'Variables y Operadores' (Tipos de datos primitivos, operadores aritméticos, lógicos y relacionales)",
            3: "Nivel 3: 'Estructuras de Control' (Condicionales if, else if, else, bucles for, while, do-while, switch)",
            4: "Nivel 4: 'Funciones y Métodos' (Creación y uso de métodos, parámetros, retorno de valores, sobrecarga)",
            5: "Nivel 5: 'Depuración Simple' (Identificar y corregir errores comunes en código C#)",
            6: "Nivel 6: 'Mini-Proyectos C#' (Crear pequeños programas interactivos que combinen los conceptos aprendidos)",
            7: "Nivel 7: 'Arrays y Colecciones (Introducción)' (Arrays unidimensionales y bidimensionales, List)",
            8: "Nivel 8: 'Introducción a la Programación Orientada a Objetos en C#' (Clases, objetos, constructores, métodos, encapsulación, propiedades)",
            9: "Nivel 9: 'Proyectos Básicos con POO en C#'",
            10: "Nivel 10: 'Introducción a las Interfaces Gráficas con Windows Forms'",
            // Add more levels here...
            50: "Nivel 50: 'Proyecto: API REST con ASP.NET Core'" 
          };

          document.querySelectorAll('.level').forEach(level => {
            level.addEventListener('click', () => {
              const levelNumber = level.getAttribute('data-level');
              const infoDiv = document.querySelector('.level-info');
              infoDiv.innerHTML = `
                <h3>${levelInfo[levelNumber]}</h3>
                <p>Descripción detallada del nivel y sus objetivos de aprendizaje.</p>
                <button class="btn">Comenzar Nivel</button>
              `;
              infoDiv.style.display = 'block';
            });
          });
// ... (código anterior) ...

// Función para mostrar el contenido de un nivel específico
// Función para mostrar el contenido de un nivel específico
function mostrarContenidoNivel(lenguaje, nivel) {
  // Ocultar todo el contenido de niveles
  var contenidosNiveles = document.querySelectorAll('.nivel-contenido');
  for (var i = 0; i < contenidosNiveles.length; i++) {
      contenidosNiveles[i].style.display = "none";
      contenidosNiveles[i].classList.remove('fade-in'); // Remover la clase de animación al ocultar
  }

  // Mostrar el contenido del nivel seleccionado con animación
  var idNivel = lenguaje + '-nivel-' + nivel;
  var nivelContenido = document.getElementById(idNivel);
  if (nivelContenido) { // Verificar si el elemento existe
      nivelContenido.style.display = "block";
      setTimeout(() => {
          nivelContenido.classList.add('fade-in'); // Agregar la clase de animación después de un pequeño retraso
      }, 50); // Retraso de 50 milisegundos
  } else {
      console.error("No se encontró el nivel con ID:", idNivel); // Mostrar un error en la consola si no se encuentra el nivel
  }
}

// Manejar clics en los botones de nivel (modificado)
document.querySelectorAll('.level-button').forEach(button => {
  button.addEventListener('click', (e) => {
      if (e.target.classList.contains('locked')) {
          alert('Este nivel aún está bloqueado. ¡Completa los niveles anteriores para desbloquearlo!');
      } else {
          const nivelInfo = e.target.textContent.match(/Nivel \d+/)[0]; // Extraer "Nivel X" del texto del botón
          const lenguaje = button.closest('.contenido').id; // Obtener el lenguaje desde el contenedor padre
          const nivelNumero = nivelInfo.split(' ')[1]; // Extraer el número de nivel

          mostrarContenidoNivel(lenguaje, nivelNumero);
      }
  });
});

// ... (resto del código) ...

function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = 'block';
  } else {
      console.error("No se encontró la modal con ID:", modalId);
  }
}

function cerrarModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = 'none';
  } else {
      console.error("No se encontró la modal con ID:", modalId);
  }
}

function ejecutarCodigo(lenguaje, nivel) {
  if (lenguaje === 'python') {
    // ... (obtener el código del editor) ...

    // Obtener el elemento iframe
    var iframeId = 'salida-' + lenguaje + '-' + nivel;
    var iframe = document.getElementById(iframeId);

    // Esperar a que el contenido del iframe se cargue
    iframe.contentWindow.document.addEventListener('DOMContentLoaded', function() {
      // Obtener el body del iframe
      var output = iframe.contentWindow.document.body;

      // Configurar Brython para escribir la salida en el iframe
      brython.stdout.write = function(data) {
        output.innerHTML += data;
      };

      // Ejecutar el código Python con Brython
      brython.run_script(codigo);
    });
  } else {
    // ... (lógica para otros lenguajes) ...
  }
}


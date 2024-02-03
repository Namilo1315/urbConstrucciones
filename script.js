//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    let x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}


//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
     distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso1");
        document.getElementById("rj").classList.add("barra-progreso1");
        document.getElementById("ps").classList.add("barra-progreso1");
        document.getElementById("mutual").classList.add("barra-progreso1");
    }

}

function enviarWhatsApp() {
    const nombre = encodeURIComponent(document.getElementById("nombre").value);
    const mensaje = encodeURIComponent(document.getElementById("mensaje").value);
    const email = encodeURIComponent(document.getElementById("email").value);

    const numeroWhatsapp = "2613441436";
    const mensajeWhatsApp = `¡Hola! Soy ${nombre}, mi email es: ${email} y mi consulta es: ${mensaje}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensajeWhatsApp}`;
    window.location.href = url;
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
  }

  const counters = document.querySelectorAll('.count');
  let animationActivated = false;

  const updateCount = () => {
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const increment = Math.ceil(target / 100);

          if (count < target) {
              counter.innerText = '+' + (count + increment);
          }
      });

      if (+counters[0].innerText < +counters[0].getAttribute('data-count')) {
          requestAnimationFrame(updateCount);
      }
  };

  const handleScroll = () => {
      const countingSection = document.querySelector('.counting');
      const sectionPosition = countingSection.getBoundingClientRect();

      // Verificar si la sección está dentro de la ventana visible
      if (sectionPosition.top <= window.innerHeight && !animationActivated) {
          animationActivated = true;
          updateCount();
      }
  };

  // Escuchar eventos de desplazamiento
  window.addEventListener('scroll', handleScroll);

  // También puedes considerar desencadenar la animación al cargar la página si la sección ya está visible
  handleScroll();
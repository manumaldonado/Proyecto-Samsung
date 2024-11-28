const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');


menu.addEventListener('click',()=>{
    sidebar.classList.toggle('menu-toggle');
    main.classList.toggle('menu-toggle');
});

const botonesMostrarMas = document.querySelectorAll('.mostrar-mas');

botonesMostrarMas.forEach(boton => {
  const contenidoOculto = boton.nextElementSibling;

  boton.addEventListener('click', () => {
    if (contenidoOculto.style.display === "none") {
      contenidoOculto.style.display = "block";
    } else {
      contenidoOculto.style.display = "none";
    }
  });
});
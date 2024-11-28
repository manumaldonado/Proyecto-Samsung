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

document.getElementById('calcular-btn').addEventListener('click', () => {
  // Obtener valores de los campos
    const ingresoMensual = parseFloat(document.getElementById('ingreso').value) || 0;
    const gastoAlimentacion = parseFloat(document.getElementById('alimentacion').value) || 0;
    const gastoVivienda = parseFloat(document.getElementById('vivienda').value) || 0;
    const gastoTransporte = parseFloat(document.getElementById('transporte').value) || 0;
    const gastoOcio = parseFloat(document.getElementById('ocio').value) || 0;
    const valorNuevoGasto = parseFloat(document.getElementById('valor-gasto').value) || 0;

    // Sumar todos los gastos
    const gastosTotales = gastoAlimentacion + gastoVivienda + gastoTransporte + gastoOcio + valorNuevoGasto;

    // Calcular reserva mensual
    const reservaMensual = ingresoMensual - gastosTotales;

    // Validar si la reserva mensual es válida
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados previos

    // Mostrar imagen según el rango de la reserva mensual
    const imagenDiv = document.createElement('div');
    imagenDiv.style.textAlign = 'center';
    let mensajeImagen = '';

    if (reservaMensual > 80) {
        mensajeImagen = '<img src="Img/mucha_plata.png" alt="Alta Reserva" style="width: 200px;">';
    } 
    else if (reservaMensual >= 50 && reservaMensual <= 80) {
        mensajeImagen = '<img src="Img/plata_moderada.png" alt="Reserva Media" style="width: 200px;">';
    } 
    else if (reservaMensual >= 20 && reservaMensual < 50) {
        mensajeImagen = '<img src="Img/poca_plata.png" alt="Reserva Baja" style="width: 200px;">';
    }
    else if (reservaMensual >= 1 && reservaMensual < 20) {
      mensajeImagen = '<img src="Img/sin_plata.png" alt="Sin Reserva" style="width: 200px;">';
    } 
     else if (reservaMensual <= 0) {
        mensajeImagen = '<img src="Img/sin_plata.png" alt="Sin Reserva" style="width: 200px;">';
        resultadosDiv.innerHTML = `<p>No es posible ahorrar con los ingresos y gastos ingresados.</p>`;
        resultadosDiv.appendChild(imagenDiv);
        imagenDiv.innerHTML = mensajeImagen;
        limpiarInputs();
        return;
    }

    // Precios de los productos
    const preciosProductos = {
        laptop: 250, // Precio promedio de una laptop
        celular: 1800, // Precio promedio de un celular
        motocicleta: 940 // Precio promedio de una moto Bera modelo SBR 2024
    };

    // Calcular meses necesarios para cada producto
    const mesesLaptop = Math.ceil(preciosProductos.laptop / reservaMensual);
    const mesesCelular = Math.ceil(preciosProductos.celular / reservaMensual);
    const mesesMotocicleta = Math.ceil(preciosProductos.motocicleta / reservaMensual);

    // Mostrar resultados en el HTML
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>Con tu reserva mensual de <strong>${reservaMensual.toFixed(2)} USD</strong>:</p>
            <li>Podrás comprar un <strong>Lenovo IdeaPad (250$)</strong> en aproximadamente <strong>${mesesLaptop}</strong> meses.</li>
            <li>Podrás comprar un <strong>Iphone 15 Pro Max (1800$)</strong> en aproximadamente <strong>${mesesCelular}</strong> meses.</li>
            <li>Podrás comprar una <strong>moto Bera modelo sbr 2024 (940$)</strong> en aproximadamente <strong>${mesesMotocicleta}</strong> meses.</li>
    `;

    // Mostrar imagen correspondiente
    imagenDiv.innerHTML = mensajeImagen;
    resultadosDiv.appendChild(imagenDiv);

    // Limpiar los campos del formulario
    limpiarInputs();
    });

    // Función para limpiar los inputs
    function limpiarInputs() {
    document.querySelectorAll('input[type="number"], input[type="text"]').forEach(input => input.value = '');
    }

    // Restringir entrada solo a números
    document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', (event) => {
        const valor = event.target.value;
        // Eliminar caracteres no numéricos, excepto "."
        event.target.value = valor.replace(/[^0-9.]/g, '');
    });
});
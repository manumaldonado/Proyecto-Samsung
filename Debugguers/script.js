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

// Acumulador para los gastos adicionales
let gastosAdicionales = 0;

document.getElementById('agregar-gasto-btn').addEventListener('click', () => {
    const nombreGasto = document.getElementById('nombre-gasto').value.trim();
    const valorGasto = parseFloat(document.getElementById('valor-gasto').value.trim()) || 0;

    if (nombreGasto && valorGasto > 0) {
        // Si ambos campos están llenos y el valor del gasto es válido
        gastosAdicionales += valorGasto; // Sumar el nuevo gasto al acumulador
        alert(`¡Nuevo gasto añadido correctamente! Total de gastos adicionales: ${gastosAdicionales.toFixed(2)} USD.`);
        
        // Limpiar los campos
        document.getElementById('nombre-gasto').value = '';
        document.getElementById('valor-gasto').value = '';
    } else {
        // Si falta algún campo o el valor del gasto es inválido
        alert('Por favor, completa ambos campos con valores válidos antes de añadir el gasto.');
    }
});

document.getElementById('calcular-btn').addEventListener('click', () => {
    // Obtener valores de los campos principales
    const ingresoMensual = parseFloat(document.getElementById('ingreso').value) || 0;
    const gastoAlimentacion = parseFloat(document.getElementById('alimentacion').value) || 0;
    const gastoVivienda = parseFloat(document.getElementById('vivienda').value) || 0;
    const gastoTransporte = parseFloat(document.getElementById('transporte').value) || 0;
    const gastoOcio = parseFloat(document.getElementById('ocio').value) || 0;

    // Sumar todos los gastos incluyendo los adicionales
    const gastosTotales = gastoAlimentacion + gastoVivienda + gastoTransporte + gastoOcio + gastosAdicionales;

    // Calcular reserva mensual
    const reservaMensual = ingresoMensual - gastosTotales;

    // Resetear el acumulador de gastos adicionales
    gastosAdicionales = 0;

    // Validar y mostrar resultados como antes
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados previos

    const imagenDiv = document.createElement('div');
    imagenDiv.style.textAlign = 'center';
    let mensajeImagen = '';

    if (reservaMensual > 80) {
        mensajeImagen = '<img src="Img/mucha_plata.png" alt="Alta Reserva" style="width: 200px;">';
    } else if (reservaMensual >= 50 && reservaMensual <= 80) {
        mensajeImagen = '<img src="Img/plata_moderada.png" alt="Reserva Media" style="width: 200px;">';
    } else if (reservaMensual >= 20 && reservaMensual < 50) {
        mensajeImagen = '<img src="Img/poca_plata.png" alt="Reserva Baja" style="width: 200px;">';
    } else if (reservaMensual >= 1 && reservaMensual < 20) {
        mensajeImagen = '<img src="Img/sin_plata.png" alt="Sin Reserva" style="width: 200px;">';
    } else if (reservaMensual <= 0) {
        mensajeImagen = '<img src="Img/sin_plata.png" alt="Sin Reserva" style="width: 200px;">';
        resultadosDiv.innerHTML = `<p>No es posible ahorrar con los ingresos y gastos ingresados.</p>`;
        resultadosDiv.appendChild(imagenDiv);
        imagenDiv.innerHTML = mensajeImagen;
        limpiarInputs();
        return;
    }

    // Mostrar resultados como antes
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>Con tu reserva mensual de <strong>${reservaMensual.toFixed(2)} USD</strong>:</p>
            <li>Podrás comprar un <strong>Lenovo IdeaPad (250$)</strong> en aproximadamente <strong>${Math.ceil(250 / reservaMensual)}</strong> meses.</li>
            <li>Podrás comprar un <strong>Iphone 15 Pro Max (1800$)</strong> en aproximadamente <strong>${Math.ceil(1800 / reservaMensual)}</strong> meses.</li>
            <li>Podrás comprar una <strong>moto Bera modelo sbr 2024 (940$)</strong> en aproximadamente <strong>${Math.ceil(940 / reservaMensual)}</strong> meses.</li>
    `;

    imagenDiv.innerHTML = mensajeImagen;
    resultadosDiv.appendChild(imagenDiv);

    // Limpiar los campos del formulario
    limpiarInputs();
});

function limpiarInputs() {
    document.querySelectorAll('input[type="number"], input[type="text"]').forEach(input => input.value = '');
}

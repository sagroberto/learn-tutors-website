// Primero obtenemos la altura de la ventana gráfica
let vh = window.innerHeight * 0.01;
// Luego establecemos la variable CSS personalizada --vh a este valor
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Escuchamos el evento resize para actualizar el valor de --vh
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('--vh set to: ', vh);
});

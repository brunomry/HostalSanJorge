import { abrirImagen, cerrarImagen, botonCerrar } from "./funciones.js";

const imgGrande = document.getElementById('largeImg');
const btnConsultaHabitacion = document.getElementById('btnCheckRoom');
const btnWhatsApp = document.getElementById('btnWhatsApp');
const btnFacebook = document.getElementById("btnFacebook");
const h1 = document.querySelector('h1');
const habitacion = h1.textContent;
const urlHabitacion = window.location.href;

document.addEventListener('click', (e) => {
    let imgSrc;
    
    if (e.target.id === 'smallImgOne' || e.target.id === 'smallImgTwo' || e.target.id === 'smallImgThree') {
        imgSrc = e.target.getAttribute('src');
        imgGrande.setAttribute('src', imgSrc);
    }

    if (e.target.id === "largeImg") {
        abrirImagen(imgGrande.src);
        botonCerrar.style.display = 'block';
    }

    if (e.target.id === "cerrar" || e.target.id === "btnCerrar" || e.target.id === "fullscreen") {
        cerrarImagen();
    }
});

const compartirEnRedSocial = (redSocial, url) => {
    const mensaje = `¡Mira esta Habitación de Hostal San Jorge!\n\n *** ${habitacion} *** \n\n${urlHabitacion}`;
    const consulta = `*** Consulta de ${habitacion} ***\n\n${urlHabitacion}`;
    const numeroTelefono = `+5493876843082`;
    
    let link;

    switch (redSocial) {
        case "ConsultaWhatsApp":
            link = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(consulta)}`;
            break;
        case "WhatsApp":
            link = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
            break;
        case "Facebook":
            link = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
    }

    window.open(link, '_blank');
};

btnConsultaHabitacion.addEventListener("click", () => {
    compartirEnRedSocial("ConsultaWhatsApp", urlHabitacion);
});

btnWhatsApp.addEventListener("click", () => {
    compartirEnRedSocial("WhatsApp", urlHabitacion);
});

btnFacebook.addEventListener("click", () => {
    compartirEnRedSocial("Facebook", urlHabitacion);
});

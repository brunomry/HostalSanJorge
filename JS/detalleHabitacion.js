const imgGrande = document.getElementById('largeImg');
const div = document.getElementById('fullscreen');
const botonCerrar = document.getElementById('cerrar');
const itemsCarousel = document.querySelectorAll('.carousel-item');
const imagesCarousel = document.querySelectorAll('.imgCarousel');

const abrirImagen = imageSrc => {
    div.classList.add('d-flex','flex-column');
    imagesCarousel.forEach((img,pos) =>{
        if(itemsCarousel[pos].classList.contains('active')){
          itemsCarousel[pos].classList.remove('active')
        }

        if(img.src === imageSrc){
          itemsCarousel[pos].classList.add('active');
        }
    })
}

const cerrarImagen = () => {
  botonCerrar.style.display = 'none';
  div.classList.remove('d-flex');
}

document.addEventListener('click', (e) => {
  let imgSrc;

  if(e.target.id === 'smallImgOne' || e.target.id === 'smallImgTwo' || e.target.id === 'smallImgThree'){
    imgSrc =  e.target.getAttribute('src');
    imgGrande.setAttribute('src',imgSrc)
  }
  
  if (e.target.id === "largeImg") {
    abrirImagen(imgGrande.src); 
    botonCerrar.style.display = 'block';
  }

  if (
    e.target.id === "cerrar" || 
    e.target.id === "btnCerrar" ||
    e.target.id === "fullscreen"
  ){
    cerrarImagen();
  }
})
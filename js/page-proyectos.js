function updateHeroProyectosHeight() {
  let heroProyectos = document.querySelector(".hero--proyectos");
  let caratulaFoto = document.querySelector(".caratula--foto");
  let fullHeightMinusHeader = 100 * vh - headerHeight;
  heroProyectos.style.paddingTop = `${headerHeight}px`;
  heroProyectos.style.height = `${fullHeightMinusHeader}px`;

  if (window.matchMedia("(min-width: 992px)").matches) {
    caratulaFoto.style.height = `${fullHeightMinusHeader}px`;
  } else {
    caratulaFoto.style.height = `100%`;
  }
}

document.addEventListener("DOMContentLoaded", updateHeroProyectosHeight);
window.addEventListener("resize", updateHeroProyectosHeight);

// function adjustTextSizes() {
//   const caratula = document.querySelector(".caratula");
//   const h1 = document.querySelector(".caratula h1");
//   const h4 = document.querySelector(".caratula h4");

//   if (!h4) return;

//   let caratulaWidth = caratula.clientWidth;

//   // Reset styles before measurement
//   h1.style.fontSize = "10px";

//   // Increase font size until it just fits
//   let fontSize = 10;
//   while (h1.offsetWidth < caratulaWidth && fontSize < 48) {
//     fontSize += 1;
//     h1.style.fontSize = `${fontSize}px`;
//   }

//   // Slightly reduce if it overshoots
//   while (h1.offsetWidth > caratulaWidth && fontSize > 10) {
//     fontSize -= 0.5;
//     h1.style.fontSize = `${fontSize}px`;
//   }

//   // // Now match h4 to h1’s width
//   // h4.style.fontSize = `${fontSize * 0.7}px`;
// }

// window.addEventListener("load", adjustTextSizes);
// window.addEventListener("resize", adjustTextSizes);

function updateHeroProyectosHeight() {
  let heroProyectos = document.querySelector(".hero--proyectos");
  let caratulaFoto = document.querySelector(".caratula--foto");
  let fullHeightMinusHeader = 100 * vh - headerHeight;
  heroProyectos.style.paddingTop = `${headerHeight}px`;
  heroProyectos.style.height = `${fullHeightMinusHeader}px`;
  console.log(`full height menos header${fullHeightMinusHeader}px`);
  console.log(`${100 * vh}`);

  if (window.matchMedia("(min-width: 768px)").matches) {
    caratulaFoto.style.height = `${fullHeightMinusHeader}px`;
  } else {
    caratulaFoto.style.height = `100%`;
  }
}

document.addEventListener("DOMContentLoaded", updateHeroProyectosHeight);
window.addEventListener("resize", updateHeroProyectosHeight);

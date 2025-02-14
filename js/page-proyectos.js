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

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    fitty(".caratula h1", { multiLine: false, observeWindow: true });
    fitty(".caratula h4", { multiLine: false, observeWindow: true });
  });
});

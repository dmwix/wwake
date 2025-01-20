"use strict";

function updateHeroProyectosHeight() {
  let vh = window.innerHeight * 0.01;
  let heroProyectos = document.querySelector(".hero--proyectos");
  let bodyProyectos = document.querySelector(".body--proyectos");
  let caratulaFoto = document.querySelector(".caratula--foto");
  let fullHeightMinusHeader = 100 * vh - headerHeight;
  heroProyectos.style.height = `${fullHeightMinusHeader}px`;
  heroProyectos.style.paddingTop = `${headerHeight}px`;
  caratulaFoto.style.height = `${fullHeightMinusHeader}px`;
}

document.addEventListener("DOMContentLoaded", updateHeroProyectosHeight);
document.addEventListener("resize", updateHeroProyectosHeight);

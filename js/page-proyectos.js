function updateHeroProyectosHeight() {
  let heroProyectos = document.querySelector(".hero--proyectos");
  let caratulaFoto = document.querySelector(".caratula--foto");
  let fullHeightMinusHeader = 100 * vh - headerHeight;
  heroProyectos.style.paddingTop = `${headerHeight}px`;
  heroProyectos.style.height = `${fullHeightMinusHeader}px`;

  if (window.matchMedia("(min-width: 768px)").matches) {
    caratulaFoto.style.height = `${fullHeightMinusHeader}px`;
  } else {
    caratulaFoto.style.height = `100%`;
  }
}

document.addEventListener("DOMContentLoaded", updateHeroProyectosHeight);
window.addEventListener("resize", updateHeroProyectosHeight);

function adjustTextSizes() {
  const caratula = document.querySelector(".caratula");
  const h1 = document.querySelector(".caratula h1");
  const h4 = document.querySelector(".caratula h4");

  if (!caratula || !h1 || !h4) return;

  let caratulaWidth = caratula.offsetWidth;

  // Ensure h1 is not restricted by CSS and can grow
  h1.style.fontSize = "10px"; // Start small to ensure growth
  h1.style.display = "inline-block"; // Allow precise width calculations

  let h1FontSize = 10; // Start at 10px
  while (h1.scrollWidth < caratulaWidth) {
    h1FontSize += 0.5;
    h1.style.fontSize = h1FontSize + "px";

    // Stop when it's slightly larger to prevent infinite loops
    if (h1.scrollWidth >= caratulaWidth - 2) break;
  }

  // Match h4's width to h1
  h4.style.fontSize = ""; // Reset size
  let h1Width = h1.offsetWidth;
  let h4FontSize = parseFloat(window.getComputedStyle(h4).fontSize);

  while (Math.abs(h4.offsetWidth - h1Width) > 2) {
    h4FontSize += h4.offsetWidth < h1Width ? 0.5 : -0.5;
    h4.style.fontSize = h4FontSize + "px";
  }
}

window.addEventListener("load", adjustTextSizes);
window.addEventListener("resize", adjustTextSizes);

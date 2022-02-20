const rightArrow = document.getElementById("btn-right");
const leftArrow = document.getElementById("btn-left");
const images = document.getElementsByClassName("main-slider__image");
const perfumeTitle = document.getElementById("perfume-title");
const perfumeText = document.getElementById("perfume-text");

const perfumeInfo = [
  {
    title: "Amaderado",
    description:
      "Las fragancias amaderadas son una familia olfativa que está compuesta por los aromas más profundos del bosque.",
  },
  {
    title: "Citrico",
    description:
      "se caracterizan por ser frescos, naturales y muy puros, su pirámide olfativa está compuesta en su mayoría por notas cítricas.",
  },
  {
    title: "Dulce",
    description:
      "Los perfumes dulces se forman a base de frutas, o bien de aromas sintéticos que crean esa sensación de dulzor.",
  },
  {
    title: "Floral",
    description:
      "Esta gran familia incluye todos los perfumes cuyo tema principal es la representación olfativa de una única flor o un conjunto de flores variadas.",
  },
  {
    title: "Frutal",
    description:
      " son aromáticos, jóvenes y enérgicos, por eso muchas mujeres, y cada vez más hombres, optan por esta familia olfativa para sus perfumes habituales.",
  },
];

perfumeTitle.innerHTML = perfumeInfo[0].title;
perfumeText.innerHTML = perfumeInfo[0].description;

rightArrow.addEventListener("click", () => {
  if (images[0].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[1].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[1].title;
    perfumeText.innerHTML = perfumeInfo[1].description;
  } else if (images[1].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[2].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[2].title;
    perfumeText.innerHTML = perfumeInfo[2].description;
  } else if (images[2].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[3].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[3].title;
    perfumeText.innerHTML = perfumeInfo[3].description;
  } else if (images[3].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[4].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[4].title;
    perfumeText.innerHTML = perfumeInfo[4].description;
  } else if (images[4].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[0].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[0].title;
    perfumeText.innerHTML = perfumeInfo[0].description;
  }
});

leftArrow.addEventListener("click", () => {
  if (images[0].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[4].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[4].title;
    perfumeText.innerHTML = perfumeInfo[4].description;
  } else if (images[1].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[0].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[0].title;
    perfumeText.innerHTML = perfumeInfo[0].description;
  } else if (images[2].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[1].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[1].title;
    perfumeText.innerHTML = perfumeInfo[1].description;
  } else if (images[3].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[2].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[2].title;
    perfumeText.innerHTML = perfumeInfo[2].description;
  } else if (images[4].className.includes("slider-image-active")) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("slider-image-active");
    }
    images[3].classList.add("slider-image-active");
    perfumeTitle.innerHTML = perfumeInfo[3].title;
    perfumeText.innerHTML = perfumeInfo[3].description;
  }
});

let productName = document.querySelector("#nombre");
let nameError = document.querySelector("#nameError");
let productBrand = document.querySelector("#marca");
let brandErrorEdit = document.querySelector("#brandErrorEdit");
let productPrice = document.querySelector("#precio");
let priceErrorEdit = document.querySelector("#priceErrorEdit");
let productDescription = document.querySelector("#description");
let descriptionError = document.querySelector("#descriptionError");
let productVol = document.querySelector("#vol");
let volErrorEdit = document.querySelector("#volErrorEdit");
let productImage = document.querySelector("#myFile");
let imageError = document.querySelector("#imageError");
let form = document.querySelector("form");
let submitBtn = document.querySelector("#btn");

// Error Handler Variables
const errorColor = "#cf9518";
const normalColor = "rgba(0, 0, 0, 0.5)";
const defaultErrorMessage = "Este campo no puede estar vacío";
let isNameValid;
let isBrandValid;
let isDescriptionValid;
let isPriceValid;
let isVolValid;
let isImageValid;

productImage.addEventListener("change", () => {
  const file = productImage.files[0];

  if (
    file.type === "image/jpeg" ||
    file.type === "image/jpg" ||
    file.type === "image/png" ||
    file.type === "image/gif"
  ) {
    imageError.innerHTML = "";
    isImageValid = true;
    console.log(isImageValid);
    return;
  } else {
    imageError.innerHTML =
      "Debes subir una imagen con formato válido (JPG, JPEG, PNG, GIF).";
    isImageValid = false;
    return;
  }
});

productName.addEventListener("blur", (e) => {
  let value = e.target.value;
  console.log(value);
  if (value.length < 5) {
    e.target.style.borderColor = errorColor;
    nameError.innerHTML = "El nombre debe tener mínimo 5 caracteres";
    isNameValid = false;
  } else if (value.length >= 5) {
    e.target.style.borderColor = normalColor;
    nameError.innerHTML = "";
    isNameValid = true;
  }
});

productDescription.addEventListener("blur", (e) => {
  let value = e.target.value;
  if (value.length < 20) {
    e.target.style.borderColor = errorColor;
    descriptionError.innerHTML =
      "La descripción debe tener mínimo 20 caracteres";
    isDescriptionValid = false;
  } else if (value.length >= 20) {
    e.target.style.borderColor = normalColor;
    descriptionError.innerHTML = "";
    isDescriptionValid = true;
  }
});

productBrand.addEventListener("blur", (e) => {
  let value = e.target.value;
  if (value.length === 0) {
    e.target.style.borderColor = errorColor;
    brandErrorEdit.innerHTML = defaultErrorMessage;
    isBrandValid = false;
  } else if (value.length > 0) {
    e.target.style.borderColor = normalColor;
    brandErrorEdit.innerHTML = "";
    isBrandValid = true;
  }
});

productPrice.addEventListener("blur", (e) => {
  let value = e.target.value;
  if (value.length === 0) {
    e.target.style.borderColor = errorColor;
    priceErrorEdit.innerHTML = defaultErrorMessage;
    isPriceValid = false;
  } else if (value.length > 0) {
    e.target.style.borderColor = normalColor;
    priceErrorEdit.innerHTML = "";
    isPriceValid = true;
  }
});

productVol.addEventListener("blur", (e) => {
  let value = e.target.value;
  if (value.length === 0) {
    e.target.style.borderColor = errorColor;
    volErrorEdit.innerHTML = defaultErrorMessage;
    isVolValid = false;
  } else if (value.length > 0) {
    e.target.style.borderColor = normalColor;
    volErrorEdit.innerHTML = "";
    isVolValid = true;
  }
  console.log(value);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    isNameValid &&
    isBrandValid &&
    isDescriptionValid &&
    isPriceValid &&
    isVolValid &&
    isImageValid
  ) {
    form.submit();
  }
});

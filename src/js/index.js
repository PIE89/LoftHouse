// // Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

// phonemask

import mask from "./phoneMask/mask.js";

mask("[data-tel-input]");

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

// Fancybox

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox="gallery-a"]');
Fancybox.bind('[data-fancybox="gallery-b"]');

// Yandex карты

import initMap from "./modules/yamap.js";

initMap()
  .then(() => {
    console.log("Карта успешно инициализирована.");
  })
  .catch((error) => {
    console.error("Ошибка инициализации карты:", error);
  });

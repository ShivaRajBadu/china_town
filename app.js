const menuData = [
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
  {
    image: "./src/assets/icon.svg",
    name: "Egg Vegetable Soup Appetizer",
    seleted: false,
  },
];

const menu_displayer = document.getElementById("menu_displayer");
const modal_1 = document.getElementById("modal_1");
const modal_2 = document.getElementById("modal_2");
const modal_3 = document.getElementById("modal_3");
const modal_4 = document.getElementById("modal_4");
const body = document.querySelector("body");

function closeModal(event) {
  console.log(event.target.tagName);
  if (event.target.tagName === "IMG") {
    event.target.parentNode.parentNode.parentNode.style.display = "none";
  } else {
    event.target.parentNode.parentNode.style.display = "none";
  }
  body.style.overflow = "auto";
}
function handleModal() {
  modal_1.style.display = "flex";
  body.style.overflow = "hidden";
}
function eatAtRestaurent() {
  modal_1.style.display = "none";
  modal_2.style.display = "flex";
  body.style.overflow = "hidden";
}
function openRestaurent() {
  modal_1.style.display = "none";
  modal_2.style.display = "none";
  modal_3.style.display = "flex";
  body.style.overflow = "hidden";
}
function pickUp() {
  modal_1.style.display = "none";
  modal_2.style.display = "none";
  modal_3.style.display = "none";
  modal_4.style.display = "flex";
  body.style.overflow = "hidden";
}
// slider function
new Splide(".splide", {
  pagination: false,
}).mount();
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    pagination: false,
    perPage: 3,
    gap: "0.8rem",
    breakPoint: {
      1220: {
        perPage: 2,
      },
      1080: {},
    },
  }).mount();
  new Splide("#image-carousel_2", {
    pagination: false,
    perPage: 2,
    gap: "2.4rem",
  }).mount();
});

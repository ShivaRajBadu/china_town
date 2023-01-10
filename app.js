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

// const menu_displayer = document.getElementById("menu_displayer");
const menu_prev = document.getElementById("menu_prev");
const menu_next = document.getElementById("menu_next");
const menu = document.getElementById("menu");
const modal_1 = document.getElementById("modal_1");
const modal_2 = document.getElementById("modal_2");
const modal_3 = document.getElementById("modal_3");
const modal_4 = document.getElementById("modal_4");
const body = document.querySelector("body");

menu_next.addEventListener("click", () => {
  menu.scrollLeft += 100;
});
menu_prev.addEventListener("click", () => {
  menu.scrollLeft -= 100;
});

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
    loop: true,
    perPage: 1,
    gap: "0.8rem",
  }).mount();
  new Splide("#image-carousel_2", {
    pagination: false,
    loop: true,
    gap: "2.4rem",
  }).mount();
});

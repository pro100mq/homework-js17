const buttonElem = document.querySelector("button")
const buttonText = document.querySelector("p")
buttonElem.textContent = buttonText.textContent

const imgElement = document.querySelector("img")
imgElement.src = "https://www.imgonline.com.ua/examples/one-tone-5.jpg";

const elementLink = document.querySelector("a");
elementLink.href = "https://www.instagram.com";
const elementImg = document.querySelector("img");
elementImg.alt = "instagram"

const listElement = document.querySelector("ul")
const firstElement = listElement.querySelector("li:nth-child(1)")
firstElement.textContent = "Це перший елемент списку"

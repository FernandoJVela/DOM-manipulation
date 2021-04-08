import { registerImage } from './lazy.js';

const URL = "https:\/\/randomfox.ca\/images\/";
const HTMLCardContainer = ".container";
const addButton = document.querySelector(".button-image");
const deleteButton = document.querySelector(".button-delete");

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mImage = () => {
    let mImage = document.createElement('img');
    //mImage.src = `${URL}${randomNumber(1,122)}.jpg`;
    mImage.dataset.src = `${URL}${randomNumber(1,122)}.jpg`;

    const imageContainer = document.querySelector(HTMLCardContainer);
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';

    cardImage.append(mImage);
    imageContainer.append(cardImage);

    appendedImages++;

    return cardImage;
}

const addImage = () => {
    const imageContainer = document.querySelector(HTMLCardContainer);

    const newImage = mImage();
    registerImage(newImage);
    console.log("Cantidad de contenedores creados: " + appendedImages);
    console.log("Cantidad de imágenes cargadas: " + loadedImages);
}

const deleteImage = () => {
    const mContainer = document.querySelector(HTMLCardContainer);
    const listOfImages = document.querySelectorAll('.container .card-image');
    Array.prototype.forEach.call(listOfImages, image => {
        mContainer.removeChild(image);
    });
    appendedImages = 0;
    loadedImages = 0;
    console.log("Cantidad de contenedores creados: " + appendedImages);
    console.log("Cantidad de imágenes cargadas: " + loadedImages);
}

addButton.addEventListener("click", addImage);
deleteButton.addEventListener("click", deleteImage);

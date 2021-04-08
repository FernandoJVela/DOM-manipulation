const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;
    image.src = url;
    loadedImages++;

    console.log("Cantidad de contenedores creados: " + appendedImages);
    console.log("Cantidad de imágenes cargadas: " + loadedImages);

    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(loadImage);
})

export const registerImage = (image) => {
    observer.observe(image);
}
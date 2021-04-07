const baseURL = 'https://platzi-avo.vercel.app';
const URL = "https://platzi-avo.vercel.app/api/avo";
const mountNode = document.querySelector('.main');

//--------------Fetch utilizando then y catch----------------------------
// try{
//     window.fetch(URL)
//     .then((respuesta) => respuesta.json())
//     .then((responseJson) => {
//         responseJson.data.forEach(element => {
//             console.log(element.name);
//         });
//     });
// }
// catch(error){
//     console.log(error);
// }

async function getDataFromAPI(){
    let response = await fetch(URL);

    if(!response){
        throw new Error(`HTTP error! status: ${response.status}`);
    }else{
        const data = await response.json();
        const itemsArray = [];
        data.data.forEach(element => {
            const container = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h2');
            const price = document.createElement('div');

            image.src = `${baseURL}${element.image}`;
            title.textContent = element.name;
            price.textContent = element.price;
            container.className = "card-container";

            container.append(image, title, price);

            itemsArray.push(container);
        });
        mountNode.append(...itemsArray);
    }
}

getDataFromAPI()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
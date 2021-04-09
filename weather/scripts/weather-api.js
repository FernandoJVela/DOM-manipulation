async function getWeatherData(city){
    try{
        const rawData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=7f05f65e02b4c86b3489c36b283293d5`);
        const data = await rawData.json();

        return data;
    }catch(error){
        console.error(error);
    }
}

export default getWeatherData;
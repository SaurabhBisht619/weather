const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const APP_URL = `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=yourAPIKey&units=metric`;
const weather = document.getElementById("weather");
async function getWeather(city){
    // find URL Done
    // fetch
    // json convert
    // play with object
    weather.innerHTML=`<h1>Loading...</h1>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    const obj = await response.json();
    console.log(obj);
    showWeather(obj);
}

function showWeather(data){
    if(data.cod=='404'){
        weather.innerHTML="City Not found";
        return;
    }
    else{
        weather.innerHTML=`
        <h2>Temperature: ${data.main.temp}℃</h2>
        <h2>Environment: ${data.weather[0].main}</h2>
        <h2>Humidity: ${data.main.humidity}</h2>
        <h2>Pressure: ${data.main.pressure}</h2>`
    }
}

document.getElementById("form").addEventListener("submit",function(e){
    let city = search.value;    //User type
    getWeather(city);
    e.preventDefault();
});
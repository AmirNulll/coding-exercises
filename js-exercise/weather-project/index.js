const apiKey = "90f16933f37c83aa8cd8c6427e57020d";
let cityName = "berlin";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;

const inputText = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName);
  var data = await response.json();
 if (response.status==404){
    document.querySelector('.error').style.display ='block'
    document.querySelector('.weather').style.display ='none'

 }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  }
  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  }
  if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  }
  if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./images/mist.png";
  }
  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.png";
  }
  if (data.weather[0].main == "Snow") {
    weatherIcon.src = "./images/snow.png";
  }
  if (data.weather[0].main == "Wind") {
    weatherIcon.src = "./images/wind.png";
  }

  document.querySelector('.weather').style.display ='block'
}

button.addEventListener("click", () => {
  checkWeather(inputText.value);
});

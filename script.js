const dropdown = document.getElementById("city-choice");
const button = document.getElementById("get-weather-btn");

//get weather information using fetch from fcc source
async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null
  }
}

async function showWeather(city) {
  try {
    const data = await getWeather(city);
   
    //udpating the UI using information provided by getWeather(city);
    document.getElementById("location").textContent = data.name ?? "N/A";
    document.getElementById("weather-icon").src = data.weather?.[0]?.icon ?? "";
    document.getElementById("weather-main").textContent = data.weather?.[0]?.main ?? "N/A";
    document.getElementById("main-temperature").textContent = data.main?.temp ?? "N/A";
    document.getElementById("feels-like").textContent = data.main?.feels_like ?? "N/A";
    document.getElementById("humidity").textContent = data.main?.humidity ?? "N/A";
    document.getElementById("wind").textContent = data.wind?.speed ?? "N/A";
    document.getElementById("wind-gust").textContent = data.wind?.gust ?? "N/A";

  } catch (error) {
    alert("Something went wrong, please try again later");
    return;
  }
}

button.addEventListener("click", () => {
  const city = dropdown.value;
  if (!city) return;
  showWeather(city);
});

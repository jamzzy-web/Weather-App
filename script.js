const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('city');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', function() {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b286af16ab641b4ba0a7ea9468f54a7e&units=metric`)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherResult.innerHTML = `Temperature: ${temperature}°C<br>Description: ${description}`;
            })
            .catch(error => {
                weatherResult.innerHTML = 'Error fetching weather data.';
            });
    } else {
        weatherResult.innerHTML = 'Please enter a city name.';
    }
});

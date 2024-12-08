async function getWeather() {
    const apiKey = '3ce2c79d8a8786466218b22ccd788a40';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    try {
        const currentWeatherResponse = await fetch(currentWeatherUrl);
        const currentWeatherData = await currentWeatherResponse.json();
        console.log('Current weather data:', currentWeatherData);
        displayWeather(currentWeatherData);
    } catch (error) {
        console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data. Please try again.');
    }

    try {
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        console.log('Hourly forecast data:', forecastData);
        displayHourlyForecast(forecastData.list);
    } catch (error) {
        console.error('Error fetching hourly forecast data:', error);
        alert('Error fetching hourly forecast data. Please try again.');
    }
}

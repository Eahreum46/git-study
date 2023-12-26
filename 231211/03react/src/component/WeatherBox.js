import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(`weather`, weather);
  const temperatureC = weather && weather.main.temp;
  const humidity = weather && weather.main.humidity;
  const currentWeather = weather && weather[0]?.description;
  return (
    <div className="weather-box">
      <h2>도시: {weather?.name}</h2>
      <h2>
        온도: {weather.main.temp}도 / 습도: {weather.main.humidity}
      </h2>
      <h3>현재날씨: {weather.weather[0].main}</h3>
    </div>
  );
};

export default WeatherBox;

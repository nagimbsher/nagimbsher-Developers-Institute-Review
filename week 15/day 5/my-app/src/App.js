import 'materialize-css/dist/css/materialize.min.css';
import React, { useState } from 'react';
import API_KEY from './config';
const country_decode = new Intl.DisplayNames(['en'], { type: 'region' });


function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [temperatureUnit, setTemperatureUnit] = useState('C');

  const handleWeatherSearch = async (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value;

    if (!city) {
      alert('Please enter the city. Thank you.');
      return;
    }

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (response.status === 404) {
        alert("There's no such city! Please try again.");
        return;
      }

      const data = await response.json();

      if (data.sys && data.sys.country) {
        const newSearch = {
          id: searchHistory.length + 1,
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].description,
          temp: data.main.temp,
          humidity: data.main.humidity,
        };

        setSearchHistory([...searchHistory, newSearch]);
      } else {
        alert('Failed to fetch country information for this city.');
      }

      document.getElementById('city').value = '';
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleWeatherSearch}>
          <input type="text" id="city" placeholder="Enter a city" />
          <button type="submit">Search</button>
        </form>
        <button onClick={toggleTemperatureUnit}>
          Toggle Temperature Unit ({temperatureUnit})
        </button>
      </div>
      <div className="weather">
        {searchHistory.map((search) => (
          <div className="weather_card" key={search.id}>
            <img
              src={`https://openweathermap.org/img/wn/${search.weather}.png`}
              alt="Weather icon"
            />
            <p>{search.weather}</p>
            <p>
              {temperatureUnit === 'C'
                ? `${search.temp.toFixed(1)}°C`
                : `${((search.temp * 9) / 5 + 32).toFixed(1)}°F`}
            </p>
            <p>{search.humidity}%</p>
            <p>{search.city}</p>
            <p>{country_decode.of(search.country)}</p>
            <button
              style={{ position: 'absolute', top: 0, right: 0 }}
              onClick={() => {
                setSearchHistory(searchHistory.filter((item) => item.id !== search.id));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;





import { useEffect, useState } from "react";
import Header from "./components/Header";
import ShowWeather from "./components/ShowWeather";
import TodayData from "./components/TodayData";
import FiveDayForecast from "./components/FIveDayForecast";

const App = () => {
  const [isFarenheit, setIsFarenheit] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("London");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "9ee2353a7a9004a8d0d3701c47840223";

  useEffect(() => {
    const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`;

    function getWeatherData(latitude, longitude) {
      const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

      fetch(WEATHER_API_URL, { mode: "cors" })
        .then((res) => res.json())
        .then((data) => {
          if (data.cod >= 400) {
            setError("There was some error. Please try again later");
          } else {
            setWeatherData(data);
          }
        })
        .catch((err) => {
          setError(err);
          setWeatherData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    function fetchWeatherData() {
      fetch(GEOCODING_API_URL, { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
          if (data.cod >= 400) {
            setError("Please fix location or try again later.");
            setWeatherData(null);
          } else {
            const { lat, lon } = data[0];
            getWeatherData(lat, lon);
            setError(null);
          }
        })
        .catch(() => {
          setError("Please fix location");
          setWeatherData(null);
        })
        .finally(() => {
          setLoading(true);
        });
    }

    fetchWeatherData();
  }, [location]);

  const toggleIsFarenheit = () => {
    setIsFarenheit((prev) => !prev);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLocation(e.target.locationInput.value.trim());
    setError(null);
  };

  return (
    <div className="App">
      <Header
        isFarenheit={isFarenheit}
        toggleIsFarenheit={toggleIsFarenheit}
        handleSubmit={onSubmit}
      />
      {loading && <h1 className="text-center text-3xl">Loading...</h1>}
      {error && <p className="text-center">{error}</p>}
      {weatherData && (
        <>
          <ShowWeather data={weatherData} isFarenheit={isFarenheit} />
          <TodayData data={weatherData} isFarenheit={isFarenheit} />
          <FiveDayForecast data={weatherData} isFarenheit={isFarenheit} />
        </>
      )}
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import "./weather.css";
import Air from "../../../assests/air.png";
import Temp from "../../../assests/temp.png";
import Water from "../../../assests/water.png";
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState([]);
  

  function WeatherDetails() {
    return axios.get(
      "https://api.weatherapi.com/v1/current.json?key=196fb60c2152414fa1652837230909&q=London&aqi=no"
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
  }

  useEffect(() => {
    WeatherDetails()
    .then(result => {
      console.log(result);
      setWeather(result);
    })
    .catch(error => {
      console.error("Error Fetching data", error);
    });
  }, []);

  return (
    <div className="weather__home">
      <div className="weather__date_time">
        <h1>{weather?.location?.localtime.split(" ")[0]}</h1>
        <h1>
          {weather?.current?.is_day == 1
            ? weather?.location?.localtime.split(" ")[1] + " AM"
            : weather?.location?.localtime.split(" ")[1] + " PM"}
        </h1>
      </div>
      <div className="weather__status">
        <div className="weather__cloud">
          <img src={weather?.current?.condition?.icon} alt="weather cloud" />
          <p>{weather?.current?.condition?.text}</p>
        </div>
        <div className="weather__temp">
          <h1>{weather?.current?.temp_c} °C</h1>
          <div className="pressure">
            <img src={Temp} alt="" />
            <span>
              <p>{weather?.current?.pressure_mb} mbar</p>
              <p>Pressure</p>
            </span>
          </div>
        </div>
        <div className="weather__wind">
          <div className="wind__speed">
            <img src={Air} alt="" />
            <span>
              <p>{weather?.current?.wind_kph} km/h</p>
              <p>Wind</p>
            </span>
          </div>
          <div className="wind__humidity">
            <img src={Water} alt="" />
            <span>
              <p>{weather?.current?.humidity}%</p>
              <p>Humidity</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

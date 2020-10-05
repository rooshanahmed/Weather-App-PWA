import React, { useState } from "react";
import { fetchWeather } from "./API/fetchWeather";
import { TextField, makeStyles } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  text: {
    border: "10px",
    color: "black",
  },
}));

const App = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <>
      <div className="main-container">
        <TextField
          type="text"
          variant="outlined"
          label="Search Weather"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          className={classes.text}
        />
        <br />
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default App;

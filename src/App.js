import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "4a421b88209bf37a19e22021337370e2"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    console.log(response);
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? <WeatherComponent weather={weather} /> : <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />}
    </Container>
  );
}

export default App;

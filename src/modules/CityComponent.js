import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    color: black;
    margin: 20px auto;
    & input {
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
        border: none;
        outline: none;
    }

    & button {
        padding: 10px;
        font-size: 14px;
        color: white;
        background-color: black;
        font-weight: bold;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
            <WeatherLogo src="//react-weather-app//icons/perfect-day.svg" />
            <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City" onChange={(e) => updateCity(e.target.value)} />
                <button type="submit">Search</button>
            </SearchBox>
        </>);
};

export default CityComponent;
import { useState } from "react";
import { useCityCoordinates } from "./useCityCoordinates";
import { useCurrentWeather } from "./useCurrentWeather";


export const useWeatherPage = () => {
    const [city, setCity] = useState("");
    const [isUseUserCoordinates, setIsUseUserCoordinates] = useState(false);

    const {data: coordinates} = useCityCoordinates(city);
    const [userCoordinates, setUserCoordinates] = useState({});

    const {data: weather} = isUseUserCoordinates ? useCurrentWeather(coordinates) : useCurrentWeather(userCoordinates);

    return {city, coordinates, weather, setCity}
}
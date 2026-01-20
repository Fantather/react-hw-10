import { useState } from "react";
import { useCityCoordinates } from "./useCityCoordinates";
import { useCurrentWeather } from "./useCurrentWeather";


export const useWeatherPage = () => {
    const [city, setCity] = useState("");
    const [isUseUserCoordinates, setIsUseUserCoordinates] = useState(false);

    const {data: cityCoordinates} = useCityCoordinates(city);
    const [userCoordinates, setUserCoordinates] = useState({});

    const coordinates = isUseUserCoordinates ? userCoordinates : cityCoordinates;
    const weather = useCurrentWeather(coordinates).data?.current_weather;


    // Принимает координаты пользователя, валидирует их и переключает код на поиск по пользовательским координатам
    function updateCoordinates(stringCoordinates)
    {
        const newCoordinates = parseCoordinates(stringCoordinates);
        if(!newCoordinates || isCoordinatesInvalid(newCoordinates)) return;
        
        setUserCoordinates(newCoordinates);
        setIsUseUserCoordinates(true);
    }

    // Принимает название города и переключает код на поиск погоды по названию города
    function updateCity(newCity)
    {
        setCity(newCity);
        setIsUseUserCoordinates(false);
    }


    // Вспомогательная функция для валидации координат
    function isCoordinatesInvalid({latitude, longitude})
    {
        const minLatitude = -90;
        const maxLatitude = 90;
        const minLongitude = -180;
        const maxLongitude = 180;

        return latitude < minLatitude || latitude > maxLatitude || longitude < minLongitude || longitude > maxLongitude;
    }

    // Вспомогательная функция для парсинга строки
    function parseCoordinates(stringCoordinates)
    {
        const [lat, lon] = stringCoordinates.split(' ').map(Number);

        if(isNaN(lat) || isNaN(lon)) return undefined;
        return {latitude: lat, longitude: lon};
    }

    return {city, coordinates, weather, isUseUserCoordinates, updateCity, updateCoordinates};
}
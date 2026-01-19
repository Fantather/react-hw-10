import { useState } from "react";
import { useCityCoordinates } from "./useCityCoordinates";
import { useCurrentWeather } from "./useCurrentWeather";


export const useWeatherPage = () => {
    const [city, setCity] = useState("");
    const [isUseUserCoordinates, setIsUseUserCoordinates] = useState(false);

    const {data: coordinates} = useCityCoordinates(city);
    const [userCoordinates, setUserCoordinates] = useState({});

    const locationToFetch = isUseUserCoordinates ? userCoordinates: coordinates;
    const weather = useCurrentWeather(locationToFetch).data?.current_weather;


    // Принимает координаты пользователя, валидирует их и переключает код на поиск по пользовательским координатам
    function updateCoordinates(newCoordinates)
    {
        if(isCoordinatesInvalid(newCoordinates)) return;
        
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

    return {city, coordinates, weather, updateCity, updateCoordinates};
}
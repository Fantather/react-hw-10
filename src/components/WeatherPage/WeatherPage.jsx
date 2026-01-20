// Реализуйте страницу, отражающую сведения о текущей погоде

// Ваш API погоды доступен по следующей ссылке:
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true

// Обязательные условия:
// 1) Загрузка списка через useQuery
// 2) Поиск погоды со стороны пользователя через координаты
// 3) Поиск погоды со стороны пользователя по названию города

// Для получения координат города, отправляйте запрос следующего типа:
// https://geocoding-api.open-meteo.com/v1/search?name=Киев&count=1&language=ru&format=json

// В параметре name, указывайте название города.

import './WeatherPage.css'

import { useWeatherPage } from './hooks/useWeatherPage';

import InputField from './ui/InputField/InputField';
import CurrentLocation from './ui/CurrentLocation/CurrentLocation';
import WeatherInfo from './ui/WeatherInfo/WeatherInfo';

export default function WeatherPage()
{
    const {city, coordinates, weather, isUseUserCoordinates, updateCity, updateCoordinates} = useWeatherPage();
    const title = isUseUserCoordinates ? "Погода по координатам" : city;
    return(
        <div className='weather-page'>
            <InputField label={'Поиск по названию города'} initValue='Одесса' onButtonClick={updateCity} />
            <InputField label={'Поиск по координатам'} initValue='50.45466 30.5238' onButtonClick={updateCoordinates} />
            {coordinates && 
                <div className='weather-results-container'>
                    <CurrentLocation title={title} coordinates={coordinates}/>
                    <WeatherInfo weather={weather} />
                </div>
            }
        </div>
    )
}
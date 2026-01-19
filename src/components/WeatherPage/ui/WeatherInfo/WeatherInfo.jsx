import './WeatherInfo.css'
import { weatherDescriptions } from '../../data/weatherDescriptions';

export default function WeatherInfo({weather})
{
    if(weather === undefined) return <div>Загрузка...</div>
    
    const {temperature, windspeed, weathercode} = weather;
    return(
        <div className='weather-info'>
            <span>Погода</span>
            <span>{weatherDescriptions[weathercode]}</span>
            <span>Температура</span>
            <span>{temperature}</span>
            <span>Скорость ветра</span>
            <span>{windspeed}</span>
        </div>
    )
}
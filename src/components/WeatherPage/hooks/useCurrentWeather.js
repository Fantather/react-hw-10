// Ваш API погоды доступен по следующей ссылке:
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true

import { useQuery } from "@tanstack/react-query"

export const useCurrentWeather = ({latitude, longitude} = {}) => {
    const openMeteoApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    return useQuery({
        queryKey: ['weather', latitude, longitude],
        queryFn: () => fetch(openMeteoApiUrl).then(res => res.json()),
        staleTime: 1000 * 60 * 5, // 5 минут
        enabled: !!latitude && !!longitude
    });
}
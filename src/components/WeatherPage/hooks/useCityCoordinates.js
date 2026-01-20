// Для получения координат города, отправляйте запрос следующего типа:
// https://geocoding-api.open-meteo.com/v1/search?name=Киев&count=1&language=ru&format=json

import { useQuery } from "@tanstack/react-query"

export const useCityCoordinates = (city) => {
    const geocodingApiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ru&format=json`;
    return useQuery({
        queryKey: ['city', city],
        queryFn: () => fetch(geocodingApiUrl).then(res => res.json()),
        staleTime: 1000 * 60 * 5, // 5 минут
        enabled: !!city,
        select: data => data.results[0]
    })
}
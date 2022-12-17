import { weatherApi } from "../api";
import { Weather } from "../interfaces";


export const getWeather = async (city: string) => {
    const ApiKey = '76d87cf130d2949ec37ef240e99259c0';
    const metric = 'metric';
    const lang = 'es';
    try {
        const { data } = await weatherApi.get<Weather>(`/weather?appid=${ApiKey}&units=${metric}&lang=${lang}&q=${city}`, {
            //headers: { "Accept-Encoding": "*" }
        });
        return {
            name: data.name,
            temp: data.main?.temp,
            descripcion: data.weather[0].description,
            icon: `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`
        }
    } catch (error) {
        return null;
    }


}
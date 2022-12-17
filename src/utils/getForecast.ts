import { weatherApi } from "../api";
import { Forecast } from "../interfaces";

export const getForecast = async (city: string) => {

    const ApiKey = '76d87cf130d2949ec37ef240e99259c0';
    const metric = 'metric';
    const lang = 'es';

    try {
        const { data } = await weatherApi.get<Forecast>(`/forecast?appid=${ApiKey}&units=${metric}&lang=${lang}&q=${city}`, {
            //headers: { "Accept-Encoding": "*" }
        });

        return data;
    } catch (error) {
        return null;
    }


}
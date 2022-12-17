export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
}

export interface City {
    id: number;
    name: string;
    coord: Coords;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface Coords {
    lat: number;
    lon: number;
}

export interface List {
    dt: number;
    main: MainClass;
    weather: Weathers[];
    clouds: Cloudss;
    wind: Winds;
    visibility: number;
    pop: number;
    sys: Syss;
    dt_txt: Date;
}

export interface Cloudss {
    all: number;
}

export interface MainClass {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface Syss {
    pod: Pod;
}

export enum Pod {
    D = "d",
    N = "n",
}

export interface Weathers {
    id: number;
    main: MainEnum;
    description: Description;
    icon: string;
}

export enum Description {
    AlgoDeNubes = "algo de nubes",
    CieloClaro = "cielo claro",
    MuyNuboso = "muy nuboso",
    Nubes = "nubes",
    NubesDispersas = "nubes dispersas",
}

export enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
}

export interface Winds {
    speed: number;
    deg: number;
    gust: number;
}

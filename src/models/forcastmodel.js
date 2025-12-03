export const ForecastModel = {
  city: {
    id: null,
    name: "",
    country: "",
    population: null,
    timezone: null,
    coord: {
      lat: null,
      lon: null,
    },
    sunrise: null,
    sunset: null,
  },

  list: [
    {
      dt: 0,
      dt_txt: "",
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      sys: {
        pod: "",
      },
    },
  ],

  cnt: 0,
  cod: "",
  message: 0,
};

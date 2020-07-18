export default function weather(state = [], action) {
  switch (action.type) {
    case '@weather/INFO_CITY':
      const objWeather = {
        name: action.data.name,
        temp: parseInt(action.data.main.temp),
        feels_like: parseInt(action.data.main.feels_like),
        temp_min: parseInt(action.data.main.temp_min),
        temp_max: parseInt(action.data.main.temp_max),
        humidity: action.data.main.humidity,
      };

      return objWeather;
    default:
      return state;
  }
}

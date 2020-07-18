export default function infoWeather(data) {
  return {
    type: '@weather/INFO_CITY',
    data,
  };
}

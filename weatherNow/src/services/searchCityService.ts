import api from './api';

export async function searchCity(city) {
  const result = await api.get(
    `?q=${city}&units=metric&APPID=658889fe9278a20f35f06010f2dbed7b`,
  );
  return result;
}

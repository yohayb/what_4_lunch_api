import fetch from 'isomorphic-fetch';

const weatherMapKey = '3330690bfdcdd7b75c299f67e0841c3e';
const weatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';
const ncciLat = 26.423461
const ncciLon = -80.097716


export async function getWeatherByZip(zip) {
    const zipCode = zip || '33487';
    const options = {};
    options.method = 'GET';
    const response = await fetch(`${weatherMapUrl}&zip=${zipCode},us&APPID=${weatherMapKey}`, options);
    const responseData = await response.json();
    if (response.status !== 200) {
      throw new Error(`Error ${weatherMapUrl}&zip=${zipCode},us&APPID=${weatherMapKey} ${responseData}`);
    }
    return responseData;
}

export async function getWeatherByLatLon(lat, lon) {
    const latCode = lat || ncciLat;
    const lonCode = lon || ncciLon;
    const options = {};
    options.method = 'GET';
    const response = await fetch(`${weatherMapUrl}&lat=${latCode}&lon=${lonCode}&APPID=${weatherMapKey}`, options);
    const responseData = await response.json();
    if (response.status !== 200) {
      throw new Error(`Error ${weatherMapUrl}&lat=${latCode}&lon=${lonCode}&APPID=${weatherMapKey} ${responseData}`);
    }
    return responseData;
}
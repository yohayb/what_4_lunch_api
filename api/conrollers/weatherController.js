import * as service from '../services/weather-provider-api';

export async function getWeatherByZip(req, res) {
    const zip = req.params.zipCode;
    const weather = await service.getWeatherByZip(zip);
    res.json(weather);
}

export async function getWeatherByLatLon(req, res) {
    const coord = {lat: req.params.lat, lon:req.params.lon}

    const weather = await service.getWeatherByZip(...coord);
    res.json(weather);
}


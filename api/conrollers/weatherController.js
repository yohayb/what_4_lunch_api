import * as service from '../services/weather-provider-api';

export async function getWeatherByZip(req, res) {
    const location = req.body;
    const weather = await service.getWeatherByZip(location.zipCode);
    res.json({ weather: weather });
}

export async function getWeatherByLatLon(req, res) {
    const location = req.body;
    let coord = {}
    if (location.coord)
        coord = location.coord;
    const weather = await service.getWeatherByZip(...coord);
    res.json({ weather: weather });
}


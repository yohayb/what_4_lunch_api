import * as weather from '../controllers/weatherController';
module.exports = (app) => {
   app.route('/api/weather/zip/:zipCode')
        .get(weather.getWeatherByZip);

    app.route('/api/weather/lat/:lat/lon/:lon')
        .get(weather.getWeatherByLatLon)
}
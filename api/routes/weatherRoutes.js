import * as weather from '../conrollers/weatherController';
module.exports = (app) => {
   app.route('/api/weatherByZip')
        .get(weather.getWeatherByZip);

    app.route('/api/weatherByLatLon')
        .get(weather.getWeatherByLatLon)
}
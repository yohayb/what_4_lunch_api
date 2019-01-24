import fetch from 'isomorphic-fetch';
import { getWeatherByZip, getWeatherByLatLon } from './weather-provider-api';
const weatherMapKey = '3330690bfdcdd7b75c299f67e0841c3e';
const weatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';


describe('Weather Api Providers', () => {
    describe('getWeatherByZip', () => {
        let respData = { data: { items:[{what:"idont know"}]}};
        beforeEach(() => {
            const mockResponse = {
                ok: true,
                status: 200,
                json: jest.fn(() => respData)
            };
            fetch.__setReturnResponse(mockResponse);
            fetch.mockClear();
        });
        it('should call fetch', async () => {
            // arrange
            let req = {get:jest.fn()};
            
            // act
            const zipCode = '33487'
            const actualData = await getWeatherByZip(zipCode);      
            // assert
            expect(fetch).toHaveBeenCalledWith(`${weatherMapUrl}&zip=${zipCode},us&APPID=${weatherMapKey}`, {
                headers: req.headers,
                method: 'GET'
            });
        });
    });
    describe('getWeatherByLatLon', () => {
        let respData = { data: { items:[{what:"idont know"}]}};
        beforeEach(() => {
            const mockResponse = {
                ok: true,
                status: 200,
                json: jest.fn(() => respData)
            };
            fetch.__setReturnResponse(mockResponse);
            fetch.mockClear();
        });
        it('should call fetch', async () => {
            // arrange
            let req = {get:jest.fn()};

            // act
            const latCode = 26.423461;
            const lonCode = -80.097716;
            const actualData = await getWeatherByLatLon(latCode, lonCode);      
            // assert
            expect(fetch).toHaveBeenCalledWith(`${weatherMapUrl}&lat=${latCode}&lon=${lonCode}&APPID=${weatherMapKey}`, {
                headers: req.headers,
                method: 'GET'
            });
        });
    });    
});

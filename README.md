# What4Lunch API
An api to support the What4Lunch mobile app. It maintains a list of dining locations and the ability to get the lists, add to the list, remove from the list and mark a location as visited.

## Endpoints
| EndPoint  | Verb  | Parameters | Description |
|:--------- |:----  |:----------    |:----------- |
| /api/places    | Get    | | Returns an array of all places |
| /api/places    | Post | { "name": "Name of Place", "imageUrl": "http://www.whereisthisimage.com", "address": "123 here st", "city": "Boca Raton", "state": "FL", "zipCode": "33431" } | Adds a new pace |
| /api/places/:name | Put | name of place | Adds date time for last visited |
| /api/places/:name | Delete | name of place | Removes place from list |
| /api/random   | Get | | Returns a random place from the list of stored places excluding place visted yesterday |
| /api/weatherByZip | Get | { "zipCode": 33487 } | Returns weather object |
| /api/weatherByLaton | Get | { "coord": {"lat":26.41, "lon": -80.09}} | Returns weather object

## Service providers

OpenWeatherMap.org  - user: , pwd: 
endpoint example    - http://api.openweathermap.org/data/2.5/weather?zip=33433,us&units=imperial&APPID=
# What4Lunch API
An api to support the What4Lunch mobile app. It maintains a list of dining locations and the ability to get the lists, add to the list, remove from the list and log a lunch decision. A Client app to administer the database is also included.

## Endpoints
| EndPoint  | Verb  | Parameters | Description |
|:--------- |:----  |:----------    |:----------- |
| /api/places    | Get    | | Returns an array of all places |
| /api/places    | Post | { "name": "Name of Place", "imageUrl": "http://www.whereisthisimage.com", "addresses": [{"address": "123 here st", "city": "Boca Raton", "state": "FL", "zipCode": "33431"}] } | Adds a new pace |
| /api/places/:name | Delete | "name of place" | Removes place from list |
| /api/random   | Get | | Returns a random place from the list of stored places  |
| /api/weather/zip/:zipCode | Get | | Returns weather object |
| /api/weather/lat/:lat/lon/:lon | Get |  | Returns weather object |
| /api/decisions |  Get |   | Returns a list of decisions |
| /api/decisions | Post | {"time": "DATE","dayOfWeek": "monday","attendees": ["Mike", "Yohay", "Jeff"],"nextMeeting": 35, "weather": {}, "place": {} ] | Adds a decision |
| /api/people | Get |   | Returns a list of people |
| /api/people | Post | { "name": "someone" }  | Adds a person |
| /api/people/:name | Delete | "name"  | Deletes a person |
## Service providers

OpenWeatherMap.org  - user: , pwd: 
endpoint example    - http://api.openweathermap.org/data/2.5/weather?zip=33433,us&units=imperial&APPID=


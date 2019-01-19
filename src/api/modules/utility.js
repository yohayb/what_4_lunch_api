import { getAllPlaces } from './database';

export function getRandomPlace(){
    // const places = getPlacesNotVistedYesterday();
    const places = getAllPlaces();
    const randomInt = Math.floor(Math.random() * (places.length) );
    
    return places[randomInt];
}

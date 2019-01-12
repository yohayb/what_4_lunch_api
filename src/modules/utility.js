import { getPlacesNotVistedYesterday } from './database';

export function getRandomPlace(){
    const places = getPlacesNotVistedYesterday();
    const randomInt = Math.floor(Math.random() * (places.length) );
    
    return places[randomInt];
}

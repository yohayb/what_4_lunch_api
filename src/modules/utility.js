import { getPlaces } from './db/database';

export function getRandomPlace(){
    const places = getPlaces();
    const randomInt = Math.floor(Math.random() * (places.length) );
    
    return places[randomInt];
}

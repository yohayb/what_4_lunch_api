import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('data/db.json');
const db = low(adapter);


if (!db.has('places').value())
    db.set('places', []).write();

if (!db.has('decisions').value())
    db.set('decisions', []).write();


export function addPlace(newPlace) {
    const places = db.get('places');
    const place = places.find({ name: newPlace.name }).value();
    if (!place)
        places.push(newPlace).write();
    else
        throw "Duplicate entry";
}

export function removePlace(name) {
    const place = db.get('places').find({ name: name }).value();
    db.get('places').remove({ name: name }).write();

    return place;
}


export function getAllPlaces() {
    return db.get('places').value();
}

export function getPlacesNotVistedYesterday() {
    return db.get('places')
        .filter(p => p.lastVisited ? p.lastVisited < Date() - 1 : true)
        .value();
}

export function selectPlace(newDecision) {
    db.get('decisions')
        .push(newDecision)
        .write();

    return newDecision;
}

export function getAllDecisions(){
    return db.get('decisions').value();
}
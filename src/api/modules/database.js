import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('data/db.json');
const db = low(adapter);

const PLACES_COLLECTION = 'places';
const DECISIONS_COLLECTION = 'decisions';
const PEOPLE_COLLECTION = 'people';

if (!db.has(PLACES_COLLECTION).value())
    db.set(PLACES_COLLECTION, []).write();

if (!db.has(DECISIONS_COLLECTION).value())
    db.set(DECISIONS_COLLECTION, []).write();

if (!db.has(PEOPLE_COLLECTION).value())
    db.set(PEOPLE_COLLECTION, []).write();    


export function addPlace(newPlace) {
    const places = db.get(PLACES_COLLECTION);
    const place = places.find({ name: newPlace.name }).value();
    if (!place)
        places.push(newPlace).write();
    else
        throw new Error('Duplicate entry');
}

export function removePlace(name) {
    const place = db.get(PLACES_COLLECTION).find({ name: name }).value();
    db.get(PLACES_COLLECTION).remove({ name: name }).write();

    return place;
}

export function getAllPlaces() {
    return db.get(PLACES_COLLECTION).value();
}

export function getPlacesNotVistedYesterday() {
    return db.get(PLACES_COLLECTION)
        .filter(p => p.lastVisited ? p.lastVisited < Date() - 1 : true)
        .value();
}

export function selectPlace(newDecision) {
    db.get(DECISIONS_COLLECTION)
        .push(newDecision)
        .write();
    return newDecision;
}

export function getAllDecisions(){
    return db.get(DECISIONS_COLLECTION).value();
}

export function addPeople(newPerson) {
    const people = db.get(PEOPLE_COLLECTION);
    const person = people.find({ name: newPerson.name }).value();
    if (!person)
        people.push(newPerson).write();
    else
        throw new Error('Duplicate entry');
}

export function removePerson(name) {
    const person = db.get(PEOPLE_COLLECTION).find({ name: name }).value();
    db.get(PEOPLE_COLLECTION).remove({ name: name }).write();
    return person;
}

export function getAllPeople() {
    return db.get(PEOPLE_COLLECTION).value();
}
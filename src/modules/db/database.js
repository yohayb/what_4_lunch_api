import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('data/db.json');
const db = low(adapter);


if(!db.has('places').value())
    db.set('places', []).write();

export function addPlace(newPlace) {
    const places = db.get('places');
    const place = places.find({name: newPlace.name}).value();
    if(!place)
        places.push(newPlace).write();
    else
        throw "Duplicate entry";
}

export function removePlace(place){
    db.get('places').remove({name: place}).write();
}


export function getPlaces() {
    return db.get('places').value();
}

export function selectPlace(name) {
    db.get('places')
      .find({name: name})
      .assign({lastVisited: Date.now()})
      .write();
}
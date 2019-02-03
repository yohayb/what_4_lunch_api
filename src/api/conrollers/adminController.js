import * as db from '../modules/database';

export function getAllPlaces(req, res) {
    const places = db.getAllPlaces();
    res.json(places);
}
export function addPlace(req, res) {
    const newPlace = { ...req.body, insertDate: new Date() }
    try{
        db.addPlace(newPlace);
        res.send(newPlace);
    } catch(error){
        res.status(500).send({ place: newPlace, message: error.message })
    }
    
    
}

export function removePlace(req, res) {
    const place = db.removePlace(req.params.name)
    res.json({ message: `${req.params.name} has been removed from future lunch selections`, place: place });
}

export function getAllDecisions(req, res) {
    const decisions = db.getAllDecisions();
    res.json(decisions);
}
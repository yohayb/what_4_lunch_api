import * as db from '../modules/database';

export function getAllPlaces(req, res) {
    const places = db.getAllPlaces();
    res.json(places);
}
export function addPlace(req, res) {
    try {
        const newPlace = {...req.body, insertDate: new Date()}
        db.addPlace(newPlace);
        res.json({message: `Added ${req.body.name} as new lunch location`, place: newPlace});
    }
    catch(err){
        res.json({message: err});
    }
}

export function removePlace(req, res) {
    const place = db.removePlace(req.params.name)
    res.json({message:`${req.params.name} has been removed from future lunch selections`, place:place});
}
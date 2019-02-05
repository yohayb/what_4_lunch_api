import * as db from '../modules/database';

export function getAllPoeple(req, res) {
    const people = db.getAllPeople();
    res.json(people);
}

export function addPerson(req, res) {
    const newPerson = { ...req.body, insertDate: new Date() }
    try{
        db.addPeople(newPerson);
        res.send(newPerson);
    } catch(error){
        res.status(500).send({ person: newPerson, message: error.message })
    }   
}

export function removePerson(req, res) {
    const person = db.removePerson(req.params.name)
    res.json({ message: `${req.params.name} has been removed from going to lunch`, person });
}

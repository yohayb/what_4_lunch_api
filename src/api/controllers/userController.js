import * as db from '../modules/database';
import * as utility from '../modules/utility';

export function getRandomPlace(req, res) {
    const place = utility.getRandomPlace();
    res.json(place);
}

export function selectPlace(req, res) {
    const decision = db.selectPlace(req.body)
    res.json({message: `${decision.place.name} has been selected for today's lunch. `, decision: decision});
}


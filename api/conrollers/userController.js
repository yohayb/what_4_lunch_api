import * as db from '../modules/database';

export function getRandomPlace(req, res) {
    const place = utility.getRandomPlace();
    res.json(place);
}


export function selectPlace(req, res) {
    const place = db.selectPlace(req.params.name)
    res.json({message: `${req.params.name} has been selected for today's lunch. It will be excluded from tomorrow's selection`, place: place});
}


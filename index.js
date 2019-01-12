import express from 'express';
import bodyParser from 'body-parser';
import * as db from './src/modules/db/database';
import * as utility from './src/modules/utility';
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/places', (req,res) => {
    const places = db.getPlaces();
    res.send(places);
});

app.post('/api/places', (req,res) => {
    try {
        db.addPlace(req.body);
        res.send(`Added ${req.body.name} as new lunch location`);
    }
    catch(err){
        res.send(err);
    }
    
});

app.param('name', (req,res,next,name) =>{
    req.name=name;
    next();
});

app.put('/api/places/:name', (req,res) => {
    db.selectPlace(req.name)
    res.send(`${req.name} has been selected for today's lunch. It will be excluded from tomorrow's selection`);
});

app.param('name', (req,res,next,name) =>{
    req.name=name;
    next();
});

app.delete('/api/places/:name', (req,res) => {
    db.removePlace(req.name)
    res.send(`${req.name} has been removed from future lunch selections`);
});

app.get('/api/random', (req,res) => {
    const place = utility.getRandomPlace();

    res.send(place);
})

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`listening on port ${port}`);
})
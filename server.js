import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './api/routes/adminRoutes';
import userRoutes from './api/routes/userRoutes';
import weatherRoutes from './api/routes/weatherRoutes';
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

adminRoutes(app);
userRoutes(app);
weatherRoutes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`listening on port ${port}`);
})
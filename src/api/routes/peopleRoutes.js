
import * as people from '../controllers/peopleController';
module.exports = (app) => {
    app.route('/api/people')
        .get(people.getAllPoeple)
        .post(people.addPerson);

    app.route('/api/people/:name')
        .delete(people.removePerson);
}


import * as admin from '../controllers/adminController';
module.exports = (app) => {
    app.route('/api/places')
        .get(admin.getAllPlaces)
        .post(admin.addPlace);

    app.route('/api/places/:name')
        .delete(admin.removePlace);

    app.route('/api/decisions')
        .get(admin.getAllDecisions);
}

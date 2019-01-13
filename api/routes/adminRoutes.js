
import * as admin from '../conrollers/adminController';
module.exports = (app) => {
    app.route('/api/places')
        .get(admin.getAllPlaces)
        .post(admin.addPlace);

    app.route('/api/places/:name')
        .delete(admin.removePlace);
}

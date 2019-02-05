import * as user from '../controllers/userController';
module.exports = (app) => {
   app.route('/api/random')
        .get(user.getRandomPlace);

    app.route('/api/decisions')
        .post(user.selectPlace);
}
var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');

module.exports = function (app) {

    app.route('/users').get(users.list);
    // app.route('/users/:userId')
    //     .get(users.read).put(users.update);
    // app.param('userId', users.userByID);

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);
    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));
    app.get('/signout', users.signout);

};
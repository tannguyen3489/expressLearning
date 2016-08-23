var reactController = require('../controllers/reactjs.server.controller');

module.exports = function (app) {
    app.get('/reactjs', reactController.reactJsIndex);
};
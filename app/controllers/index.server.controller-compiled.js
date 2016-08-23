'use strict';

exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    res.render('index', {
        title: 'Hello World',
        name: 'Hello World',
        userFullName: req.user ? req.user.fullName : ''
    });
};

exports.reactJsIndex = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    res.render('reactJS', {
        title: 'Hello World',
        userFullName: req.user ? req.user.fullName : ''
    });
};

//# sourceMappingURL=index.server.controller-compiled.js.map
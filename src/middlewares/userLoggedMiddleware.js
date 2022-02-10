const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('user');


function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false

    let emailsInCookie = req.cookies.userEmail
    let userFromCoike = productModel.findField('email',emailsInCookie);

    if(userFromCoike){
        req.session.userLogged = userFromCoike
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    next()
}

module.exports = userLoggedMiddleware;

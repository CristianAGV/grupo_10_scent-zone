const User = require('../model/userModel')

function userLoggedMiddleware(req, res, next){
    
    let emailInCookie = req.cookies.userEmail
    let userFromCookie = User.findByEmail(emailInCookie)

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    if(req.session.userLogged) {
        res.locals.user = req.session.userLogged;
    }

    next()
}

module.exports = userLoggedMiddleware
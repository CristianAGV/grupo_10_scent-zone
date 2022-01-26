const User = require('../model/userModel')

async function userLoggedMiddleware(req, res, next){
    try {
        let emailInCookie = req.cookies.userEmail
        if(emailInCookie) {
            let userFromCookie = await User.findByEmail(emailInCookie)

            if(userFromCookie) {
                req.session.userLogged = userFromCookie;


            }

            if(req.session.userLogged) {
                res.locals.user = req.session.userLogged;
            }
        } else {
            next()
        }
    
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = userLoggedMiddleware
// const User = require('../model/userModel')
async function isAdminMiddleware(req, res, next) {
    try {
        let userInSession = req.session.userLogged
        if(userInSession && userInSession.role == 1) {
           return res.redirect('/')
        } else if (userInSession && userInSession.role == 2) {
            next()
        }
    } catch (error) {
        res.send(error)
    }
}


module.exports = isAdminMiddleware
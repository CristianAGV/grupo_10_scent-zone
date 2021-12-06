const {validationResult} = require('express-validator')
const userModel = require('../model/userModel')


const usersController = {
    login: (req, res) => {
        res.render('./users-views/login')
    },
    registro: (req, res) => {
        res.render('./users-views/registro')
    },
    historial: (req, res) => {
        res.render('./users-views/history', { user: req.session.userLogged })
    },
    processLogin: ( req, res ) => {
        
        let errors = validationResult( req );

        if ( errors.isEmpty() ){
            const user = userModel.verifyUser( req.body.email, req.body.password );
            if ( user ){
                req.session.userLogged = user;
                return res.redirect('/') 
            }else{
                return res.render('/.users-views/login',{
                    errors:[{
                        msg: "Credenciales invalidas"
                    }]
                })
            }
        }else{
            return res.render('./users-views/login', {errors: errors.mapped()})
        }

    }

}

module.exports = usersController;
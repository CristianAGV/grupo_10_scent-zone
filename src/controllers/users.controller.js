const {validationResult} = require('express-validator')
const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs');


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
                delete user.password
                req.session.userLogged = user;
                
                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                }
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

    },

    createUser: (req, res) => {
    
        let newUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 12),
            image: req.file,

        }
        userModel.create(newUser)
        res.redirect('/');

    },


}

module.exports = usersController;
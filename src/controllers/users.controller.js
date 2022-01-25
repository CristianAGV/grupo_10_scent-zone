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
    detalle: (req, res) => {
        res.render('./users-views/detail')
    },
    processLogin: ( req, res ) => {
        
        let errors = validationResult( req );

        if ( errors.isEmpty() ){
            const user = userModel.verifyUser( req.body.email, req.body.password );
            console.log( user )
            if ( user ){
                req.session.userLogged = user;
                
                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                }
                return res.redirect('/') 
            }else{
                return res.render('./users-views/login',{
                    errors:[{
                        msg: "Credenciales invalidas"
                    }]
                })
            }
        }else{
            return res.render('./users-views/login', {errors: errors.mapped()})
        }

    },

    createUser: async(req, res) => {  
        try {
            let errors = validationResult(req);

        if (errors.isEmpty()) {

            let newUser = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                country: req.body.country,
                password: bcrypt.hashSync(req.body.password, 12),
                image: req.file.filename,
                role: 1,

            }
            let result = await userModel.create(newUser)
            console.log(result)
            res.redirect('/');
        } else{
            return res.render('./users-views/registro', {errors: errors.mapped(), old: req.body})
        }
        } catch (error) {
            console.log(error)
        }     

        
    },

    logOut : (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }


}

module.exports = usersController;
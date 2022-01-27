const {validationResult} = require('express-validator')
const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;

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
    detalle: async (req, res) => {
        try {
            let user = await db.users.findByPk(req.params.id)
            let userId = req.params.id
            res.render('./users-views/detail', {user: user})
        } catch (error) {
            console.log(error)
        }
        
    },

    actualizar: async(req, res ) => {
        try {
            const id = req.params.id;
            const user = await userModel.read(parseInt(id));
            res.render('./users-views/updateForm', {usuario: user })   
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    },

        
    listarTodos: async (req, res ) => {
        try {
            
            const users = await userModel.getUsers();
            res.render('./users-views/users-list', {users})
            
        } catch (error) {
            console.log( error )
            res.redirect('/');
        }
    },

    actualizarUsuario: async (req, res ) => {   
       try {
            const id = req.params.id;

            const { password,image, ...user } = req.body;

            let userUpdated = {
                ...user,
                role:1
            }

            if ( req.file ){
                userUpdated = {
                    ...userUpdated,
                    image: req.file.filename
                }
            }

            if ( req.body.password ){
                userUpdated = {
                    ...userUpdated,
                    password: bcrypt.hashSync(req.body.password, 12)
                }
            }                            
            await userModel.update(userUpdated,id)
            res.redirect('/');
            
        } catch (error) {
            console.log( error )
            res.redirect('/')
        }
        
    },

    eliminarUsuario: async(req,res) => {
        try {

            
            
        } catch (error) {
            
        }

    },


    processLogin: async ( req, res ) => {

        try {
            
            let errors = validationResult( req );

            if ( errors.isEmpty() ){
                const user = await userModel.verifyUser( req.body.email, req.body.password );
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


        } catch (error) {
    
            console.log(error)
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
    },

    deleteView: async(req, res) => {
        try {
            let user = await db.users.findByPk(req.params.id)
            let userId = req.params.id
            res.render('users-views/user-delete', {user: user})
        } catch (error) {
            console.log(error)
        }
    },

    deleteUser : async(req, res ) => {
        try {
            let userId = req.params.id
            let deleted = await userModel.delete(userId)
            console.log('Usuario eliminado')
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = usersController;
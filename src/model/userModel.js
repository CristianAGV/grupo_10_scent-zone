const fs = require('fs');
const path = require('path');
const userDb = require('../data/users.json');
const usersPath = path.resolve(__dirname, '../data/users.json');
const db = require('../database/models');
const sequelize = db.sequelize;

const bcrypt = require('bcryptjs');

let usableUsersDb = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

const idGen = function (){
    let newId = 0;
   usableUsersDb.forEach(item => {
      if(newId < item.id){
        newId= item.id;
      }
    })
    return newId + 1;
  };

const userModel = {

    

    getUsers: async() => {
        try {
            let result =  await db.users.findAll();
            return result
        } catch (error) {
            console.log(error)
        }

    },

    create: async (user) => {
        try{
            let result = await db.users.create(user);
              console.log(result)
        } catch (error){
            console.log(error)
        }

    },

    read: async(userID) => {
        try{
            const result = await db.users.findByPk(userID)
            return result
        } catch (error){
            console.log(error)
        }

    },

    update: async(user, userid) => {
        console.log('HElllooo')
        console.log( user )
        console.log( userid)
        try{
           return await db.users.update(user, {where: {
                id: userid
            }})

        } catch (error){
           console.log(error)
        }
    },

     findByEmail: async(email) => {
         try{
             const emailFound = await db.users.findOne({ where: { email: email } });
             return emailFound
         } catch(error){
             console.log(error)
         }

     },

     verifyUser: async(email, password) => {

        
        try {
            const userFound = await userModel.findByEmail(email);
            if(userFound){
                if ( bcrypt.compareSync( password, userFound.password ) ){
                 return userFound;
                }
           } else {
               return null;
           }
        }
        catch (err) {
            console.log(err)

            
        }
    }, 

    delete: async(userId) => {
        try {
            db.users.destroy({where:{id: userId}})
        } catch (error) {
            console.log(error)
        }
    }
    

        



     // verifyUser: ( email, password ) => {
    //     console.log( "logueo",email, password )

    //     const userFound = JSON.parse(fs.readFileSync(usersPath, 'utf8')).find( user => user.email === email);

    //     if ( userFound ){
    //         if ( bcrypt.compareSync( password, userFound.password ) ){
    //             return userFound;
    //         }else{
    //             return null;
    //         }
    //     }else{
    //         return null;
    //     }

    // },

    //  findByEmail: (email) => {

    //      let emailFound = userDb.find(user => user.email === email);
    //      return emailFound;
    //  },

}







module.exports = userModel
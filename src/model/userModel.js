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
        try{
           let result = await db.users.update(user, {where: {
                id: userid
            }})

            console.log(result)
        } catch (error){
           console.log(error)
        }
    },

    //  findByEmail: async(email) => {
    //      try{
    //          const emailFound = await db.users.findOne({ where: { email: email } });
    //          return emailFound
    //      } catch(error){
    //          console.log(error)
    //      }

    //  },

     verifyUser: async(email, password) => {

        console.log( "logueo",email, password )

        const userFound = db.user.userModel.findByEmail(email);
            if(userFound){
                if ( bcrypt.compareSync( password, userFound.password ) ){
                 return userFound;
                }
           } else {
               return null;
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

    // getUsers: () => {
    //     return JSON.parse(
    //         fs.readFileSync(usersPath, {
    //           encoding: "utf8",
    //         })
    //       );
    // },

    // pushUser: (base) => {
    //     base = JSON.stringify(base, null, 4);
    //     return fs.writeFileSync(usersPath, base)
    // },

    // create: (user) => {
    //     let db = userModel.getUsers();
    //     user.id = idGen();
    //     db.push(user);
    //     userModel.pushUser(db);

    // }


}

// userModel.update(  {first_name: "user",
//     last_name: "user",
//     email: "user@user.com",
//     country: "Belize",
//     password: "123",
//     image: 'hi.jpg',
//     role: 1,}, 12)







module.exports = userModel
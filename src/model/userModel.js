const fs = require('fs');
const path = require('path');
const userDb = require('../data/users.json');
const usersPath = path.resolve(__dirname, '../data/users.json');
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

    verifyUser: ( email, password ) => {

        const userFound = userDb.find( user => user.email === email);

        if ( userFound ){
            if ( password === userFound.password ){
                return userFound;
            }else{
                return null;
            }
        }   

    },

    findByEmail: (email) => {
        let emailFound = userDb.find(user => user.email === email);
        return emailFound;
    },

    getUsers: () => {
        return JSON.parse(
            fs.readFileSync(usersPath, {
              encoding: "utf8",
            })
          );
    },

    pushUser: (base) => {
        base = JSON.stringify(base, null, 4);
    return fs.writeFileSync(usersPath, base)
    },

    create: (user) => {
        let db = userModel.getUsers();
        character.id = idGen();
        db.push(user);
        userModel.pushUser(db);
    
    }


}


module.exports = userModel
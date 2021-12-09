

const userDb = require('../data/users.json');



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
    }


}


module.exports = userModel
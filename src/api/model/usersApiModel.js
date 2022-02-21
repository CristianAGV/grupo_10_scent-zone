const db = require("../../database/models");

const apiUsersModel = {
    getUserDetail: async (userId) => {
        try {

            let result = await db.users.findByPk(userId);
            if (result == null) {
                console.log("There is not a user with the requested ID");
                return "nullUser";
            } else {
                console.log(result);
                return result
            }

        } catch (error) {
            console.log(error);
            return ("an error ocurred: " + error)
        }

    },
}

module.exports = apiUsersModel;
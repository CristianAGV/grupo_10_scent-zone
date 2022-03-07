const db = require("../../database/models");

const apiUsersModel = {
  getAllUsers: async () => {
    try {
      const result = await db.users.findAll();
      const users = result.map((user) => {
        const { id, first_name, email } = user;
        return {
          id,
          first_name,
          email,
          detail: `https://scent-zone.herokuapp.com/api/users/${id}`,
        };
      });
      return {
        count: result.length,
        users,
      };
    } catch (error) {
      console.log(error);
    }
  },

  getUserDetail: async (userId) => {
    try {
      let result = await db.users.findByPk(userId);
      if (result == null) {
        console.log("There is not a user with the requested ID");
        return "nullUser";
      } else {
        return result;
      }
    } catch (error) {
      console.log(error);
      return "an error ocurred: " + error;
    }
  },
};

module.exports = apiUsersModel;

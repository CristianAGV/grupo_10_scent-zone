const usersApiModel = require("../model/usersApiModel");

const usersApiController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await usersApiModel.getAllUsers();
      if (users) {
        return res.status(200).json(users);
      }
    } catch (error) {
      const message = "An internal error have occurred " + error;
      return res.status(500).json({
        message,
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      let userId = req.params.id;
      let selectedUser = await usersApiModel.getUserDetail(userId);
      let imageRoute = `https://scent-zone.herokuapp.com/assets/users/${selectedUser.image}`;

      if (selectedUser == "nullUser") {
        return res
          .status(404)
          .json({ message: "There is not a user with the requested ID" });
      } else {
        return res.status(200).json({
          userData: {
            id: selectedUser.id,
            firstName: selectedUser.first_name,
            lastName: selectedUser.last_name,
            email: selectedUser.email,
            country: selectedUser.country,
          },
          userImage: {
            url: imageRoute,
          },
        });
      }
    } catch (error) {
      let errorIm = "an error ocurred: " + error.message;
      return res.status(500).json({ error: errorIm });
    }
  },
};

module.exports = usersApiController;

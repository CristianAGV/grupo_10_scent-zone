const usersApiModel = require('../model/usersApiModel');

const usersApiController = {
    getUserById: async (req, res) => {
        try {
            let userId = req.params.id;
            let selectedUser = await usersApiModel.getUserDetail(userId);

            if (selectedUser == "nullUser") {
                return res.status(404).json({message: "There is not a user with the requested ID"})
            }else{
                return res.status(200).json({
                    userData: {
                        id: selectedUser.id,
                        firstName: selectedUser.first_name,
                        lastName: selectedUser.last_name,
                        email: selectedUser.email,
                        country: selectedUser.country
                    },
                    userImage: {
                        url: selectedUser.image,
                    }
                })
            }

           
        } catch (error) {
            let errorIm = "an error ocurred: " + error.message;
            return res.status(500).json({error: errorIm});
        }
        
    }
};

module.exports = usersApiController;
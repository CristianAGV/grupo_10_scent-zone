
const usersController = {
    login: (req, res) => {
        res.render('./users-views/login')
    },
    registro: (req, res) => {
        res.render('./users-views/registro')
    },
    historial: (req, res) => {
        res.render('./users-views/history')
    },

}

module.exports = usersController;

const usersController = {
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('registro')
    },
    historial: (req, res) => {
        res.render('history')
    },

}

module.exports = usersController;
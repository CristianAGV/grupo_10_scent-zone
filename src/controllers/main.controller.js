const controller = {
    home: (req, res) => {
        res.render('home')
    },
    cart: (req, res) => {
        res.render('cart')
    },
    questions: (req, res) => {
        res.render('questions')
    },
    registro: (req, res) => {
        res.render('registro')
    },
}

module.exports = controller
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
    login: (req, res) => {
        res.render('login')
    },
    historial: (req, res) => {
        res.render('history')
    },
    product: (req, res) => {
        res.render('product-detail')
    },
    categories: (req, res) => {
        res.render('categories')
    },
    
    registro: (req, res) => {
        res.render('registro')
    },

    editProduct: (req,res) => {
        res.render('edit-product')
    }
}

module.exports = controller
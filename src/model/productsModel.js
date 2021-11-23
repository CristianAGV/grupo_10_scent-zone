const path = require('path')
const fs = require('fs')
const productsDb = require('../data/products.json');
const { receiveMessageOnPort } = require('worker_threads');
const productsPath = path.resolve(__dirname, '../data/products.json');


function calcIndex() {
    let index = 0
    productsDb.forEach(product => {
        if(product.id > index) {
            index = product.id
        }
    })
    return index + 1
}

const productsModel = {
    addProduct: function(info, img) {
        let newProduct = {
            id: calcIndex(),
            productName: info.productName,
            Brand: info.Brand,
            description: info.description,
            gender: info.gender,
            category: info.category,
            price: Number(info.price),
            size: Number(info.size),
            stock: 20,
            image: img
        }

        productsDb.push(newProduct)
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(productsDb, null, 4))
        console.log('product added');
    },
    showProducts: function() {
        return JSON.parse(
            fs.readFileSync(productsPath, {
              encoding: "utf8",
            })
          );
    },
}



module.exports = productsModel
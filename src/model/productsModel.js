const path = require('path')
const fs = require('fs')
const productsDb = require('../data/products.json');
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
    addProduct: function(info) {
        let newProduct = {
            id: calcIndex(),
            productName: info.productName,
            Brand: info.Brand,
            description: info.description,
            gender: info.gender,
            category: info.category,
            price: Number(info.price),
            size: Number(info.size),
            stock: 20
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

    editProductInfo: function( id ){
        const productFound = productsDb.find( product => product.id === parseInt(id));        
        return productFound;
    },

    editProduct: function( id, data  ){

        const newProducts = productsDb.map( product => {
            if (product.id === parseInt(id)){
                product={
                    id: parseInt(id),
                    ...data
                }                
                return product
                
            }else{
                return product
            }
        });   
		
		fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(newProducts,null, 4) );
	},

    deleteProduct: function( id ){
        const newProducts = productsDb.map( product => {
            if ( product.id === parseInt( id )){
                return {
                    ...product,
                    status: false
                }
                
            }else{
                return product
            }
        });
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(newProducts,null, 4) );
    }
}


module.exports = productsModel
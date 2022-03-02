import React, {useEffect, useState} from 'react';
import './ProductList.css'

function ProductList() {

    const [productsList, setProductsList] = useState([]);

    const fetchProducts = async() => {

        try {
            const response = await fetch('http://localhost:3003/api/products')
            const {products} = await response.json()
            
            setProductsList( products );

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (

        <div className="products-list-container">
            <table className="table">
                <thead>
                    <tr>            
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Precio $</th>
                        <th>Categoría</th>
                        <th>Género</th>
                        <th>Imagen</th>                  
                        <th>Tamaño (ml)</th>
                        <th>Detalle</th>                   
                    </tr>
                </thead>
                <tbody>                
                {
                    productsList.map(product => {
                        
                        return(
                            <tr key={ product.id }>
                                <td data-label="Product">{ product.product_name }</td>
                                <td data-label="Marca">{ product.brand }</td>
                                <td data-label="Precio">{ product.price }</td>
                                <td data-label="Categoria">{ product.category.category_name }</td>
                                <td data-label="Género">{ product.gender }</td>
                                <td data-label="Imagen"><img src={ product.product_image } alt="product"/></td>
                                <td data-label="Tamaño">{ product.size }</td>
                                <td data-label="Detalle"><a href={ product.detail }><i className="fas fa-eye icono-color"></i></a></td>
                                
                            </tr>
                        )   
                        
                    })
                    
                }                
                </tbody>
            </table>
        </div>
    )
}

export default ProductList


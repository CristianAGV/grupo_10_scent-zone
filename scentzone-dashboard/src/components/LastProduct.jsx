import React, {useEffect, useState} from 'react'
import './LastProduct.css'
function LastProduct() {

    const [lastProduct, setLastProduct] = useState({})

    const fetchLastProduct = async()=> {
        try {
            let response = await fetch('https://scent-zone.herokuapp.com/api/products')
            let data = await response.json()
            let product = data.products[data.count - 1]
            setLastProduct(product)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchLastProduct()
    }, [])

  return (
    <>
        <h3 className='lastProduct-section-title'>Último producto agregado</h3>
        <div className='dashboard-card' id='last-product'>
            <div className='last-product-container'>
                <div className='lastProduct-image-container'>
                    <img src={lastProduct.product_image} alt="Product" />
                </div>
                <div className='lastProduct-main-info'>
                    <p>{lastProduct.product_name}</p>
                    <p>{lastProduct.brand}</p>
                    <p>{lastProduct.gender} - {lastProduct.size}ML</p>
                </div>
                <div className='lastProduct-description'>
                    <p>{lastProduct.description}</p>
                </div>
                <div className='lastProduct-price'>
                    <p>${lastProduct.price}</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default LastProduct
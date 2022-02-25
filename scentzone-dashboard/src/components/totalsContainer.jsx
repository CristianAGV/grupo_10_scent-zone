import React from "react";
import Card from "./card";

function TotalsContainer() {
    const [users, setUsers] = React.useState([]);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const productsData = await fetch('http://localhost:3003/api/products');
        const products = await productsData.json();
        setProducts(products)

        const usersData = await fetch('http://localhost:3003/api/users');
        const users = await usersData.json();
        setUsers(users)
    }


    return (
        
        <div className="cards-container">
      <Card total={products.count} object="products"/>
      <Card total={users.count} object="users"/>
      <Card total="5" object="categories"/>
      </div>
        
    )
}

export default TotalsContainer;
import React from "react";
import Card from "./card";

function TotalsContainer() {
    const [users, setUsers] = React.useState([]);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const productsData = await fetch('https://scent-zone.herokuapp.com/api/products');
        const products = await productsData.json();
        setProducts(products)

        const usersData = await fetch('https://scent-zone.herokuapp.com/api/users');
        const users = await usersData.json();
        setUsers(users)
    }


    return (
        
        <div className="cards-container" >
      <Card total={products.count} object="productos"/>
      <Card total={users.count} object="usuarios"/>
      <Card total="5" object="categorías"/>
      </div>
        
    )
}

export default TotalsContainer;
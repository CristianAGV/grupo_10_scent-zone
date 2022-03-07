import React, { useEffect, useState } from "react";
import "./Categories.css";

function Categories() {
  const [categoriesList, setCategories] = useState([]);

  const fetchCategories = async () => {

    try {
      let response = await fetch("https://scent-zone.herokuapp.com/api/products");
      let info = await response.json();
      let categories = info.countByCategory;
      setCategories(categories);

    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
        <table className="categoriesTable">
            <thead>
                <tr>
                    <th>Dulce</th>
                    <th>Amaderado</th>
                    <th>Cítrico</th>
                    <th>Floral</th>
                    <th>Frutal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{categoriesList.dulces}</td>
                    <td>{categoriesList.amaderados}</td>
                    <td>{categoriesList.citricos}</td>
                    <td>{categoriesList.florales}</td>
                    <td>{categoriesList.frutales}</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default Categories;

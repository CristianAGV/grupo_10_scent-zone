import "./App.css";
import TotalsContainer from "./components/totalsContainer";
import LastProduct from "./components/LastProduct";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <h1>Scent Zone Dashboard</h1>
      <TotalsContainer />
      <h2>Products per Category</h2>
      <Categories />
      <h2>Products List</h2>
      <LastProduct />
      <ProductList />
    </div>
  );
}

export default App;

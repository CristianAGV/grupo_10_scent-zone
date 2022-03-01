import "./App.css";
import TotalsContainer from "./components/totalsContainer";
import LastProduct from "./components/LastProduct";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <h1>Scent Zone dashboard</h1>
      <TotalsContainer />
      <Categories/>
      <h2>Products List</h2>
      <LastProduct />
      <ProductList/>
    </div>
  );
}

export default App;

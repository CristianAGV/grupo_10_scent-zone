import "./App.css";
import TotalsContainer from "./components/totalsContainer";
import LastProduct from "./components/LastProduct";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className="page-wrapper">
        <div className="dash-section" id="inicio">
          <h1>Scent Zone Dashboard</h1>
          <TotalsContainer />
        </div>

        <div className="dash-section" id="categorias">
          <h2>Categorías</h2>
          <Categories />
        </div>
        
        <div className="dash-section" id="productos">
        <h2>Lista de Productos</h2>
        <LastProduct />
        </div>
        <div className="dash-section">
          <h3>Todos los productos</h3>
          <ProductList />
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import TotalsContainer from "./components/totalsContainer";
import LastProduct from "./components/LastProduct";
function App() {
  return (
    <div className="App">
      <h1>Scent Zone dashboard</h1>
      <TotalsContainer />
      <h2>Products List</h2>
      <LastProduct />
    </div>
  );
}

export default App;

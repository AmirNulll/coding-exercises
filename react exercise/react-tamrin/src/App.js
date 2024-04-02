import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import shop from "./pages/shops/shop";
import cart from "./pages/carts/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={} />
          <Route path="/cart" element={cart} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

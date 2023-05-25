import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/home/Home";
import Cart from "./Pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppConText";
function App() {
  return (
    <div className="App">
      <AppProvider>

     
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </AppProvider>
    </div>
  );
}

export default App;

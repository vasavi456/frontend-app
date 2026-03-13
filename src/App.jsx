
import { useState, createContext } from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Register from "./components/Register.jsx";
import Cart from "./components/Cart.jsx";
import Orders from "./components/Orders.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const AppContext = createContext();
function App() {
  const [user, setUser] = useState({});
  const [cart,setCart] = useState([])
  return (
    <div>
      <AppContext.Provider value={{ user, setUser,cart,setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Content />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;
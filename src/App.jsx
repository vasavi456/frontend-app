
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./components/login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Order from "./components/Order";
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Login/>
      <Register/>
      <Cart/>
      <Order
      />
      <Footer />
    </div>
  );
}
export default App;
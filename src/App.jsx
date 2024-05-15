// import BurguerButton from "./components/layout/navbar/BurguerButton";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layaut } from "./components/layout/Layaut";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
// import Checkout from "./components/pages/checkout/Checkout";
import CartContextGlobal from "./context/CartContext";
import CheckoutFormik from "./components/pages/checkoutformik/CheckoutFormik";






function App() {
  return <BrowserRouter >


    <CartContextGlobal>
      <Routes >
        <Route element={<Layaut />} >

          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:gategory" element={<ItemListContainer />} />
          {/* <Route path="/category/camioneta" element={<ItemListContainer />} />
        <Route path="/category/camiones" element={<ItemListContainer />} /> */}

//con los :: y luego el ID trabajamos con un parametro dinamico .. navegando ah lo solicitado x el usuario
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkoutformik" element={<CheckoutFormik />} />
          <Route path="*" element={<h3>Error 404</h3>} />
        </Route>
      //ruta principal
      </Routes>
    </CartContextGlobal>


  </BrowserRouter>



}

export default App;

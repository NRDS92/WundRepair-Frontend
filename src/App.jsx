import { useState } from "react"

import Header from "./assets/components/Header"
import Nav from "./assets/components/Nav"
import ProductDescription from "./assets/components/ProductDescription"
import ProductUses from "./assets/components/ProductUses"
import Cart from "./assets/components/Cart"
import Footer from "./assets/components/Footer"


function App() {
  const [openCart, setOpenCart] = useState(false)

  return (
    <>
      <Nav />
      {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
      <Header setOpenCart={setOpenCart}/>
      <ProductDescription  setOpenCart={setOpenCart}/>
      <ProductUses />
      
      <Footer />
      
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
export const App=()=>{
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path=""  element={<Login/>}/>
        <Route path="register"  element={<Register/>}/>
        <Route path="home"  element={<Home/>}/>
        <Route path="about"  element={<About/>}/>
        <Route path="contact"  element={<Contact/>}/>
        <Route path="products"  element={<Products/>}/>
        <Route path="cart"  element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

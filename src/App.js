import react from "react";
import Nav from "./components/Nav";
import AddProduct from "./components/AddProduct";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PrivateComponent from "./components/PrivateComponent";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import Update from "./components/Update";
function App(){


  return (

    <div>
<BrowserRouter>

      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
<Route path="/products" element={<ProductList/>}/>
<Route path="/add" element={<AddProduct/>}/>
<Route path="/update/:id" element={<Update/>}/>
<Route path="/logout" element={<h1>Product logout listing</h1>}/>
<Route path="/profile" element={<h1>Product profile listing</h1>}/>
</Route>
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>


      </Routes>
</BrowserRouter>
<Footer/>
    </div>
  )
}
export default App;

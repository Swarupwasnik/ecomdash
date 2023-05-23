import React,{useEffect, useState} from "react";
import "../App.css";
import { Link, useNavigate} from "react-router-dom";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCatgory] = useState("");
  const [company, setCompany] = useState("");
const [error,setError]=useState(false);
const navigate=useNavigate();
  const addProduct=async()=>{
console.log(!name);
if(!name || !price || !category || !company)
{
setError(true);
return false;


  }

    console.log(name,price,category,company);
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    var result= await fetch('http://localhost:3200/addproduct',{
      method:'post',
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{
        "Content-Type":"application/json"
      }
    });
    result=await result.json();
    console.log(result);
    if(result){
      navigate("/products");
    }
    
  }

  
  return(
    <div class="">
    <div class="">

      <form  className=" mx-auto col-10 col-md-8 col-lg-6">

        <div class="d-flex align-items-center mb-3 pb-1">
          <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
          <span class="h1 fw-bold mb-0">Add Product</span>
        </div>

        {/* <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5> */}

        <div class="form-outline mb-4">
          
      <input placeholder="name" type="text" id="form2Example17"  name="name" value={name} onChange={(e)=>setName(e.target.value)}   class="form-control form-control-lg" />
      {error && !name && <span style={{color:"red",marginTop:"-5px",display:"block",marginLeft:"1px"}}>Enter Valid Name</span>}

        </div>
        <div class="form-outline mb-4">
          <input placeholder="price" type="number" name="price" value={price} onChange={((e)=>setPrice(e.target.value))}  id="form2Example27" maxLength={10} minLength={3} size="10"  class="form-control form-control-lg" required />
          {error && !price && <span style={{color:"red",marginTop:"-5px",display:"block",marginLeft:"1px"}}>Enter Valid Price</span>}

        </div>
        <div class="form-outline mb-4">
          <input placeholder="category" type="text" name="category" value={category} onChange={(e)=>setCatgory(e.target.value)} maxLength="8" minLength="4" size="10" required  id="form2Example27" class="form-control form-control-lg" />
          {error && !category && <span style={{color:"red",marginTop:"-5px",display:"block",marginLeft:"1px"}}>Enter Valid Category</span>}

        </div>
        <div class="form-outline mb-4">
          <input placeholder="company" type="text" name="company" value={company} onChange={(e)=>setCompany(e.target.value)} maxLength="8" minLength="4" size="10" required  class="form-control form-control-lg" />
          {error && !company && <span style={{color:"red",marginTop:"-5px",display:"block",marginLeft:"1px"}}>Enter Valid Company</span>}

        </div>

        <div class="pt-1 mb-4">
          <button class="btn btn-dark btn-lg btn-block w-25" onClick={addProduct}  type="button">Add Product</button>
        </div>

   
      </form>

    </div>
  </div>



  )
};
export default AddProduct;

import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"; 


const Update = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCatgory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const navigate=useNavigate();
const params =useParams();

useEffect(()=>{
  getProductDetails()
},[]);

const getProductDetails=async()=>{
  console.log(params)
  
  let result=await fetch(`http://localhost:3200/products/${params.id}`);
  result= await result.json();
setName(result.name);
setPrice(result.price);
setCompany(result.company);
setCatgory(result.category);
setCompany(result.company);
}

  let UpdateList=async()=>{
    console.log(name,company,category,price)
    let result= await fetch(`http://localhost:3200/products/${params.id}`,{
      method:"Put",
      body:JSON.stringify({name,price,category,company}),
      headers:{
        "Content-Type":"application/json"

      }
    });
    result=await result.json()
    console.log(result);
    navigate("/products")

  }

  return (
    <div className="mx-auto">
      <h3 className="text-center">Update Product</h3>
      <div className="mx-auto">
        <form className=" mx-auto col-10 col-md-8 col-lg-6">
          <div class="d-flex align-items-center mb-3 pb-1">
            <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
            {/* <span class="h1 fw-bold mb-0">Add Product</span> */}
          </div>

          {/* <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5> */}

          <div class="form-outline mb-4">
            <input
              placeholder="name"
              type="text"
              id="form2Example17"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="form-control form-control-lg"
            />
          </div>
          <div class="form-outline mb-4">
            <input
              placeholder="price"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="form2Example27"
              maxLength={10}
              minLength={3}
              size="10"
              class="form-control form-control-lg"
              required
            />
          </div>
          <div class="form-outline mb-4">
            <input
              placeholder="category"
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCatgory(e.target.value)}
              maxLength="8"
              minLength="4"
              size="10"
              required
              id="form2Example27"
              class="form-control form-control-lg"
            />
          </div>
          <div class="form-outline mb-4">
            <input
              placeholder="company"
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              maxLength="8"
              minLength="4"
              size="10"
              required
              class="form-control form-control-lg"
            />
          </div>

          <div class="pt-1 mb-4">
            <button
              class="btn btn-dark btn-lg btn-block w-50"
              onClick={UpdateList}
              type="button"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Update;

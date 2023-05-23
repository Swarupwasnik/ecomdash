import React, { useState,useEffect } from "react";
import "../App.css"
import {useNavigate,Link} from "react-router-dom"




const ProductList=()=>{
const [products,setProducts]=useState([]);
useEffect(() =>{
    getProducts();
},[])

 const getProducts=async()=>{
let result= await fetch("http://localhost:3200/products");
result=await result.json();
setProducts(result);
 }
 console.log('products', products)
 
    //DELETE
const deleteProducts=async(id)=>{
  var result=fetch(`http://localhost:3200/products/${id}`,{
    method:"Delete"
  });
  result=(await result).json;
  if(result)
  {
getProducts();
  }


}
//SEARCH

const searchHandle=async(event)=>{
  console.log(event.target.value)
  let key=event.target.value;
  
  if(key){
    let result=await fetch(`http://localhost:3200/search/${key}`);
  result= await result.json();
  

  if(result){
    setProducts(result)
  }

}else{
  getProducts();
}

}  
  
return(

  <>
  <div className="">
  <form class="form-inline my-2 my-lg-0" style={{marginLeft:"35%"}}>
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={searchHandle}

            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          
          <br />

    {products.length>0 && (
      <ul>
        {
          products.map((item,index)=>(
            <table class="table table-striped table-dark mx-auto w-50">
  <thead>
    <tr className="mx-auto" key={item._id}>
      <th scope="col">{index+1}</th>
      <th scope="col">{item.name}</th>
      <th scope="col">{item.price}</th>
      <th scope="col">{item.category}</th>
      <th><button onClick={()=>deleteProducts(item._id)}>delete</button></th>
     <th scope="col"> <Link to={"/update/"+item._id}>Update
      </Link></th>
    </tr>
  </thead>
  </table>
          ))
        }
      </ul>
    )



    }
  </div>
  
  
  </>
)
 

        
    
}
export default ProductList;
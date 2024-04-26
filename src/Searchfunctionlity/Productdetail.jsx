import React from "react"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Productdetail = () => {
    const{id}=useParams();
    const [product, setProduct] = useState(null);
     useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => console.error('Error fetching products:', error));
   },[id]);

   return (
    <>
    <div className='grid grid-cols-3 h-[100vh] w-full mt-6 px-10'>
    {product && ( // Check if product is not null before rendering
    <div className="flex justify-center">
        <div className='mt-5 w-[35vw] h-[45vh]  items-center'>
            <img  src={product.images[3]} alt="" />
          
          <h1 className='text-2xl pt-5 text-black text-center'>Id:{product.id}</h1>
          <h1 className='text-2xl pt-5 text-black-400 text-center'>title:- {product.title}</h1>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>description:- {product.description}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>price- {product.price}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>discountPercentage:- {product.discountPercentage}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>Rating:- {product.rating}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>Stock:- {product.stock}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>Brand- {product.brand}</h2>
          <button className="h-[5vh] w-[10vw] bg-slate-800 text-white ml-10 mt-3">Add to cart</button>
    
          </div>

        </div>
      )}
    </div>
    </>
   )
 }
 
 export default Productdetail;

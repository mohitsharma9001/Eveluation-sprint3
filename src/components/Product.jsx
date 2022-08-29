import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const {handleCart,cart} = useContext(CartContext)
  const [products,setProducts] = React.useState([])

  React.useEffect(()=>{
    getData()
  },[])

  function getData(){
    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((res)=>setProducts(res))
    
  }

 async function deleteP(id){
    fetch(`http://localhost:8080/products/${id}`,{
      method:"DELETE",
    
    })
    .then(()=>getData())
  }
  const product = { id: 1 };
  return (
    products.map((item)=>(
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button" >Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>handleCart(1)}>Incerement</button>
        <span data-cy="product-count" >
          {
            cart
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" disabled={cart==0} onClick={()=>handleCart(-1)} >Decrement</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>deleteP(item.id)}>Remove</button>
      </div>
    </div>
    ))
  );
};

export default Product;





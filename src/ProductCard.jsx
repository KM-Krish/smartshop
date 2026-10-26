import { useState,useEffect } from "react";


function ProductCard(props) {
  const[count, setCount] = useState(0);
  useEffect(() => {
  console.log("cart count changed",count); },[count]);
  return (
    <article>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>₹{props.price}</p>
      <button onClick={()=>setCount(count+ 1)}>Add to Cart</button>

      <p>Added:{count}</p>
      {count > 0 && <p>Product added to cart!</p>}
    </article>
  );
}

export default ProductCard;
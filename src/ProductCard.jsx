function ProductCard(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <p>₹{props.price}</p>
      <button>Add to Cart</button>
    </article>
  );
}

export default ProductCard;
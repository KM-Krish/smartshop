import './App.css';
function App(){
  return(
    <>
    <header>
       
        <h1>SmartShop</h1>
        <nav>
        <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">Products</a></li>
         <li><a href="#">Offers</a></li>
         <li><a href="#">Orders</a></li>

        </ul>
        </nav>
         <button className="card-btn">Cart</button>
      </header>
      <main>
        <section className="hero">
        <h2>Welcome to SmartShop</h2>
        <p>Get special offers when you visit our stores</p>
        <button  className="hero-btn">Allow Location</button>
        </section>



          <article>
            <h3>10% OFF</h3>
            <p>Get 10% discount on purchases above ₹2000.</p>
            <button>Shop Now</button>
          </article>
        

        <section>
          <h2>Products</h2>
          <div className="products-grid">
          <article>
            <h3>Product 1</h3>
            <p>₹500</p>
            <button>Add to Cart</button>
          </article>

          <article>
            <h3>Product 2</h3>
            <p>₹800</p>
            <button>Add to Cart</button>
          </article>

          <article>
            <h3>Product 3</h3>
            <p>₹1200</p>
            <button>Add to Cart</button>
          </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 SmartShop</p>
      </footer>
      
      </>
  )
}

export default App;
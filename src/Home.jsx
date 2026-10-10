import Header from './Header';
import Hero from './Hero';
import ProductCard from './ProductCard';


 const products = [
  { id: 1, name: "Product 1", price: 500 },
  { id: 2, name: "Product 2", price: 800 },
  { id: 3, name: "Product 3", price: 1200 }
  ];
function Home(){
    return(
        <>
           <Header />
      <main>
         <Hero />


          <article className="offer">
            <h3>10% OFF</h3>
            <p>Get 10% discount on purchases above ₹2000.</p>
            <button>Shop Now</button>
          </article>
        

        <section className="products">
          <h2>Products</h2>
          <div className="products-grid">
           {products.map((product) => (
           <ProductCard
          
           key={product.id}
           name={product.name}
           price={product.price}
             />
            ))}
          </div>
        </section>
      </main>
         <footer>
          <p>© 2026 SmartShop</p>
         </footer>

        </>
    );
}

export default Home;
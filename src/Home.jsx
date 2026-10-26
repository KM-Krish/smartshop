import Header from './Header';
import Hero from './Hero';
import ProductCard from './ProductCard';
import{useState,useEffect} from "react";



function Home(){
    const[products,setProducts] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError]= useState("");

    useEffect(()=>{
      fetch("https://dummyjson.com/products?limit=9")
      .then((response) => {
        if(!response.ok){
          throw new Error("Failed to fetch products");

        }
        return response.json();
      })
      .then((data) =>{
        setProducts(data.products);

      })
      .catch((error) =>{
        setError(error.message);
      })
      .finally(() =>{
        setLoading(false);

      })
      },[]);
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
          <h2>OurProducts</h2>
          <div className="products-grid">
           {products.map((product) => (
           <ProductCard
          
           key={product.id}
           name={product.name}
           price={product.price}
           image={product.thumbnail}
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
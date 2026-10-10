import { Link } from 'react-router-dom';

function Header(){
    return (
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
        <Link to="/cart" className="card-btn"> Cart </Link>
      </header>
    );
}
export default Header;
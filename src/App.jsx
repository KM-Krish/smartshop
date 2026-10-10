import './App.css';

import Home from './Home';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App(){
 
  return(
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/cart" element={<Cart />} />
          



        </Routes>
      
      
      
      </BrowserRouter>
     
      
      </>
  )
}

export default App;
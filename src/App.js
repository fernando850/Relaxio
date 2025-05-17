import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Products from './components/Products/Products.js';
import Orders from './components/Orders/Orders.js';
import Login from './components/Login.js';
import Support from './components/Support/Support.js';
import ReturnPolicy from './components/Support/ReturnPolicy/ReturnPolicy.js';
import FAQ from './components/Support/FAQ/FAQ.js';

function App() {
  return (

    <BrowserRouter>
      <Routes> 
        {/* Home Page (path "/") */}
        <Route path="/" element={<Home />} />

        {/* Products Page (path "/products") */}
        <Route path="/products" element={<Products />} />

        {/* Orders Page (path "/orders") */}
        <Route path="/orders" element={<Orders />} />

        {/* Login Page (path "/signin") */}
        <Route path="/signin" element={<Login />} />

        {/* Support Page (path "/support") */}
        <Route path="/support" element={<Support />} />

        {/* Return Policy Page (path "/support/return-policy") */}
        <Route path="/support/return-policy" element={<ReturnPolicy />} />

        {/* FAQ Page (path "/support/faq") */}
        <Route path="/support/faq" element={<FAQ />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

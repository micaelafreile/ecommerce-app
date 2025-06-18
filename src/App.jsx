import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'T-Shirt', price: 25, description: 'Comfy cotton shirt' },
    { id: 2, name: 'Sneakers', price: 60, description: 'Lightweight and stylish' },
    { id: 3, name: 'Jeans', price: 45, description: 'Slim fit denim' }
  ]);

  return (
    <div>
      <h1>Product Listing</h1>
      <ProductList prodList={products} />
    </div>
  );
}

export default App;





































// import { useState } from 'react'
// import ProductList from './ProductList'
// import './App.css'

// function App() {

//   const [products] = useState([
//     {"productName": "Milk", "Price":5},
//     {"productName": "Cereal", "Price":4},
//     {"productName": "Water", "Price":3},
//     {"productName": "Coffee", "Price":2}
  
//   )];
//   return (
//     <div>
//       <h1>Product Listing</h1>
//       <ProductList prodList={products} />
//     </div>
//   );
// }

// export default App

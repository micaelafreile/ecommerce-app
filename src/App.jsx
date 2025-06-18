import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'General Admission', price: 100, description: 'Basic Access' },
    { id: 2, name: 'Pit', price: 200, description: 'Closest you can get to the stage' },
    { id: 3, name: 'VIP', price: 300, description: 'Total' }
  ]);

  return (
    <div className="app-container">
      <h1>Product Listing</h1>
      <ProductList prodList={products}  />
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

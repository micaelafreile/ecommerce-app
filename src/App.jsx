import { useState } from 'react'
import ProductList from './ProductList'
import './App.css'

function App() {

  const prodList= [
    {"productName": "Milk", "Price":5},
    {"productName": "Cereal", "Price":4},
    {"productName": "Water", "Price":3},
    {"productName": "Coffee", "Price":2}
  ]
  return (
    <>
      <ProductList  prodList={prodList}/>
      <span>I love lemur</span>
    </>
  );
}

export default App

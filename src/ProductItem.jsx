function ProductItem({ name, price, description }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
      <h3>{name}</h3>
      <p><strong>Price:</strong> ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductItem;































// import { useState } from 'react';
// import { string } from 'prop-types';



// const ProductItem = ({name, price, decription}) => {


//   return (
//     div>
//         <h3>{name}</h3>
//         <p>price:${price}</p>
//         <p><{description}></p>
//     <div/>
//   );
// }

// export default ProductItem;
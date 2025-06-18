import { useState } from 'react';
import { string } from 'prop-types';



const ProductItem = ({name, price}) => {


  return (
    <>
        <h3>{name}</h3>
        <p>price: {price}</p>
        {/* {props.prodItem} */}
    </>
  );
}

export default ProductItem;
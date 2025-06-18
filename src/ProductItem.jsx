import { useState } from 'react';
import { string } from 'prop-types';



const ProductItem = (props) => {


  return (
    <p>
        {props.prodItem}
    </p>
  );
}

export default ProductItem;
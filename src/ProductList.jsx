import ProductItem from './ProductItem';

const ProductList = ({ prodList }) => {
  return (
    <div>
      <div>
        {prodList.map(prod => (
          <ProductItem
            key={prod.id}
            name={prod.name}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


































//import { useState } from 'react';
// import { string } from 'prop-types';
// import ProductItem from './ProductItem'



// const ProductList =  => {
//     // const [name, setName] = useState(props.initialName);
//     // const changeName = () => {
//     //     setName('anakin');
//     // }

//   return (
//     <div>
//         <p> 
//             <div>
//                 {props.prodList.map(prod => (
//                 <ProductItem
//                     name={prod.productName} 
//                     price={prod.Price} 
//                 />
//                 ))}
//             </div>
//               {/* <ProductItem prodItem= {props.prodList[0].productName}/>
//               <ProductItem prodItem= {props.prodList[1].productName}/>
//               <ProductItem prodItem= {props.prodList[2].productName}/>
//               <ProductItem prodItem= {props.prodList[3].productName}/> */}

//         </p>
//         <span>I love <u>bad</u>boy</span>
//         {/* <p>{name}</p>
//         <button onClick={changeName}>Change Name</button> */}
//     </div>
//   );
// }

// export default ProductList;
 
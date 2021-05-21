import React from 'react';
import { Link } from '@reach/router';
// import axios from 'axios';
const ProductList = props => {
    return (
        <div>
            <ul>
            {props.products.map((product, idx)=>{
                return (
                    <li>
                        <Link to={`/product/${product._id}`} key={idx}>{product.title}</Link>
                    </li>
            )})}
            </ul>
        </div>
    )
}
export default ProductList;
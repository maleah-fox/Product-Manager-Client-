import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
const ProductList = props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
    }
    console.log(props.products);
    return (
        <div>
            <ul>
            {props.products.map((product, idx)=>{
                return (
                    <li  key={idx}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}> Delete</button>
                    </li>
            )})}

            </ul>
        </div>
    )
}
export default ProductList;
import React from 'react'
import productsData from '../Data/productsData.json';
import Product from './Product';

const Products = () => {
  return (
    <div className='container'>
        <div className='row'>
                {
                 productsData.products.map(productItem=> <Product  products={productItem} key={productItem.id}/>)
                }
        </div>
      
    </div>
  )
}

export default Products

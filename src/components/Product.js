import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementcart,decrementcart } from '../Reducer/CartReducer';

const Product = (props) => {
    const {name,url,price}=props.products;
    const dispatch=useDispatch();

  return (
    <div className='col-sm-3 mb-5'>
      <div className='card shadow-lg 
            bg-white rounded' >
        <img src={url} />
        <p className='text-center'>{name}</p>
        <div className='text-center'>
            <button className='btn btn-primary btn-sm mx-3' onClick={()=>dispatch(incrementcart({
                productName:name,
                productPrice:price
            }))}>Add</button>
            <button className='btn btn-danger btn-sm' onClick={()=>dispatch(decrementcart({
                productName:name,
                productPrice:price
            }))}>Remove</button>
        </div>
        <span className='mb-2 mx-3'><strong>{price}</strong></span>

      </div>
    </div>
  )
}

export default Product

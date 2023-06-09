import React from 'react'
import MyCart from '../Components/mycarts/MyCart'

const Cart = () => {
  const token = sessionStorage.getItem('accessToken');
  return (
    <div>
      <MyCart token={token}/>
    </div>
  )
}

export default Cart

import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'


const TotalTable = () => {
  const {cartItems} = useSelector((state)=>state.cart);
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  console.log(cartItems);

  useEffect(()=>{
    TotalAmount();
  },[cartItems])

  const TotalAmount = () => {
    let price = 0,
      weight = 0;
    cartItems.map((item)=>{
      price += item.price.cost;
      weight += 100
    })  
    setPrice(price)
    setWeight(weight)
  }

  return (
    <table>
        <tr>
            <th>Total Qyt:</th>
            <td>{cartItems.length}</td>
        </tr>
        <tr>
            <th>Total Weight:</th>
            <td>{weight} ml</td>
        </tr>
        <tr>
            <th>Total Price:</th>
            <td>₹ {price}</td>
        </tr>
        

    </table>
  )
}

export default TotalTable

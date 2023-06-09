import React, {  useState } from 'react'
import './MyCart.css'
import HomeIcon from '@mui/icons-material/Home';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CartData from './CartData';
import TotalTable from './TotalTable';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';


const MyCart = ({token}) => {
  // const dispatch = useDispatch();
  const {cartItems} = useSelector((state)=>state.cart);
  const [totalQ, setTotalQ] = useState(1);
  console.log(cartItems);
  // useEffect(()=>{
  //   dis
  // })
    const navigate = useNavigate();

    const handlecheckout = () =>{
      if(token){
        navigate('/thank')
      }
      else{
        navigate('/login')
      }
    }


  return (
    <div className='mycart'>
      <div className="mycart-top-main">
      <div className="cart-left">
        <div>
            NANYKIDS CATEGORIES
        </div>
      </div>
      <div className="cart-right">
        <div className="cart-right-top-box">
            <div className="cart-right-account-left">
                <p>Shopping Cart</p>
            </div>
            <div className="cart-right-account-right">
                <p onClick={()=>navigate('/')} style={{cursor: 'pointer'}}><HomeIcon/></p>
                <p><KeyboardDoubleArrowRightIcon/></p>
                <p style={{color: 'rgba(0,0,0,0.8)'}}>Shopping Cart</p>
            </div>
        </div>
      </div>
      </div>
      <div className="mycart-top-right">
         <table>
            <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Unit Weight</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Total Weight</th>          
            </tr>
            {cartItems?.map((data)=>{
              
              return(
                <CartData id={data.id} image={data.url} name={data.title} price={data.price.cost} weight={100} quant={data.quantity} totalQ={data.price.cost} setTotalQ={setTotalQ}/>    
              )
            })}
         </table>
      </div>
      <div className="second-table">
        <TotalTable totalQ={totalQ}/>
      </div>
      <div className="cart-last-button">
        <div>
            <button onClick={()=>navigate('/')}>CONTINUE SHOPPING</button>
        </div>
        <div style={{justifyContent: 'flex-end'}}>
            <button onClick={()=>handlecheckout()}>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default MyCart

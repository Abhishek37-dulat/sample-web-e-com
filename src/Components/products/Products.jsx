import React, { useEffect, useState } from 'react'
import './Products.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { getProducts } from '../../reducer/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reducer/actions/cartAction';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const navigate = useNavigate();
    const {products} = useSelector((state)=> state.getProducts);
    const dispatch = useDispatch();

    
    useEffect(()=>{
       dispatch(getProducts())
        
    },[dispatch])


    const addItemToCart= (data) => {
        dispatch(addToCart(data.id, 1))
        navigate('/cart')
    }
    
  return (
    <div className='products'>
        <div className="product-details">
            <div>
            <p style={{fontSize:'30px', marginBottom: '5px'}}>Our Products</p>
            <p style={{color: 'rgba(0,0,0,0.5)', marginBottom: '10px', padding: '0px 5px', textAlign:'center'}}>Your little bundle of joy deserves nothing but the best. Explore natural, 100% toxin-free & gentle baby care products by NanyKids. Give your little one the care they deserve!</p>
            <button>VIEW ALL</button>
            </div>
        </div>
        {products?.map((data)=>{
            return(
                <div className="product-carts">
                <div className="cart-1">
                    <div className="cart-1-dis">
                        <p>{data.discount}</p>
                    </div>
                    <div className="cart-1-all">
                        <div className="cart-1-image">
                            <img src={data.url} alt='s1'/>
                        </div>
                        <div className="cart-1-details-1">
                            <p style={{color: 'rgba(0,0,0,0.5)',  padding: '0px 5px', textAlign:'center'}}>{data.title.substring(0,70)}</p>
                        </div>
                        <div className="cart-1-details-2">
                            <p style={{color: '#65AF00',padding: '0px 5px', textAlign:'center', fontWeight: 600}}>{data.description}</p>
                        </div>
                        <div className="cart-1-price">
                            <p style={{marginRight: '5px', fontWeight: '600'}}>₹ {data.price.cost} </p> <p style={{textDecoration: 'line-through',fontSize: '15px', color: 'rgba(0,0,0,0.5)'}}> ₹ {data.price.mrp}</p>
                        </div>
                        <div className="cart-1-button">
                            <button onClick={()=>addItemToCart(data)}>
                                <p>ADD TO CART</p>
                                <p><ShoppingBagIcon/></p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
            )
            
        })}

        {/* {products?.map((data)=>{
            setProductState(data);
        }
            <div className="product-carts">
            <div className="cart-1">
                <div className="cart-1-dis">
                    <p>{data.discount}</p>
                </div>
                <div className="cart-1-all">
                    <div className="cart-1-image">
                        <img src={data.url} alt='s1'/>
                    </div>
                    <div className="cart-1-details-1">
                        <p style={{color: 'rgba(0,0,0,0.5)',  padding: '0px 5px', textAlign:'center'}}>{setDetailLine(data.title)}</p>
                    </div>
                    <div className="cart-1-details-2">
                        <p style={{color: '#65AF00',padding: '0px 5px', textAlign:'center', fontWeight: 600}}>{data.description}</p>
                    </div>
                    <div className="cart-1-price">
                        <p style={{marginRight: '5px', fontWeight: '600'}}>₹ {data.price.cost} </p> <p style={{textDecoration: 'line-through',fontSize: '15px', color: 'rgba(0,0,0,0.5)'}}> ₹ {data.price.mrp}</p>
                    </div>
                    <div className="cart-1-button">
                        <button>
                            <p>ADD TO CART</p>
                            <p><ShoppingBagIcon/></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )} */}
        {/* <div className="product-carts">
            <div className="cart-1">
                <div className="cart-1-dis">
                    <p>5%</p>
                </div>
                <div className="cart-1-all">
                    <div className="cart-1-image">
                        <img src='https://nanykids.com/image/product/normal/8670.jpg' alt='s1'/>
                    </div>
                    <div className="cart-1-details-1">
                        <p style={{color: 'rgba(0,0,0,0.5)',  padding: '0px 5px', textAlign:'center'}}>{detailLine}</p>
                    </div>
                    <div className="cart-1-details-2">
                        <p style={{color: '#65AF00',padding: '0px 5px', textAlign:'center', fontWeight: 600}}>Deeply Moisturizes Skin | Mild and Safe | Light Oil | 100ml</p>
                    </div>
                    <div className="cart-1-price">
                        <p style={{marginRight: '5px', fontWeight: '600'}}>₹ 189 </p> <p style={{textDecoration: 'line-through',fontSize: '15px', color: 'rgba(0,0,0,0.5)'}}> ₹ 199</p>
                    </div>
                    <div className="cart-1-button">
                        <button>
                            <p>ADD TO CART</p>
                            <p><ShoppingBagIcon/></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-carts">
            <div className="cart-1">
                <div className="cart-1-dis">
                    <p>5%</p>
                </div>
                <div className="cart-1-all">
                    <div className="cart-1-image">
                        <img src='https://nanykids.com/image/product/normal/8670.jpg' alt='s1'/>
                    </div>
                    <div className="cart-1-details-1">
                        <p style={{color: 'rgba(0,0,0,0.5)',  padding: '0px 5px', textAlign:'center'}}>{detailLine}</p>
                    </div>
                    <div className="cart-1-details-2">
                        <p style={{color: '#65AF00',padding: '0px 5px', textAlign:'center', fontWeight: 600}}>Deeply Moisturizes Skin | Mild and Safe | Light Oil | 100ml</p>
                    </div>
                    <div className="cart-1-price">
                        <p style={{marginRight: '5px', fontWeight: '600'}}>₹ 189 </p> <p style={{textDecoration: 'line-through',fontSize: '15px', color: 'rgba(0,0,0,0.5)'}}> ₹ 199</p>
                    </div>
                    <div className="cart-1-button">
                        <button>
                            <p>ADD TO CART</p>
                            <p><ShoppingBagIcon/></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-carts">
            <div className="cart-1">
                <div className="cart-1-dis">
                    <p>5%</p>
                </div>
                <div className="cart-1-all">
                    <div className="cart-1-image">
                        <img src='https://nanykids.com/image/product/normal/8670.jpg' alt='s1'/>
                    </div>
                    <div className="cart-1-details-1">
                        <p style={{color: 'rgba(0,0,0,0.5)',  padding: '0px 5px', textAlign:'center'}}>{detailLine}</p>
                    </div>
                    <div className="cart-1-details-2">
                        <p style={{color: '#65AF00',padding: '0px 5px', textAlign:'center', fontWeight: 600}}>Deeply Moisturizes Skin | Mild and Safe | Light Oil | 100ml</p>
                    </div>
                    <div className="cart-1-price">
                        <p style={{marginRight: '5px', fontWeight: '600'}}>₹ 189 </p> <p style={{textDecoration: 'line-through',fontSize: '15px', color: 'rgba(0,0,0,0.5)'}}> ₹ 199</p>
                    </div>
                    <div className="cart-1-button">
                        <button>
                            <p>ADD TO CART</p>
                            <p><ShoppingBagIcon/></p>
                        </button>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Products

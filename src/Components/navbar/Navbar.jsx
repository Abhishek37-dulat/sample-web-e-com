import React, { useContext, useState } from 'react'
import './Navbar.css'
import mainLogo from '../../Assets/nany-kids.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Person4Icon from '@mui/icons-material/Person4';
import { Badge, styled } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider';
import { useSelector } from 'react-redux';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -1,
      top: 20,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


const Navbar = () => {
    const navigate= useNavigate();
    const {account} = useContext(DataContext);
    const {cartItems} = useSelector(state=>state.cart);
    const [logDisplay, setLogDisplay] = useState('none')
    const handlelogs = () => {
        console.log("logDisplay")
        if(logDisplay === 'none'){
            setLogDisplay('block');
        }
        else{
            setLogDisplay('none')
        }
    }
    const handlelogout = () =>{
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')
        setLogDisplay('none')
        navigate('/')
    }
  return (
    <div className='navbar'>
        <div className="navbar-all">
            <div className="navbar-top">
                <div className="top-all">
                    <div className="top-left">
                        <div className="top-left-logo">
                            <img src={mainLogo} alt='website logo' onClick={()=>navigate('/')} />
                        </div>
                    </div>
                    <div className="top-mid">
                        <form>
                        <div className="top-mid-search-box">
                            <input type="text" placeholder='Search Box ...' />
                        </div>
                        <div className="top-mid-search-button">
                            <button>
                                <p style={{fontSize: '10px', marginTop: '9%'}}><SearchIcon/></p>
                                <p style={{fontSize: '14px', marginTop: '10.5%'}}>SEARCH</p>
                            </button>
                        </div>
                        </form>
                    </div>
                    <div className="top-right">
                        <div className="top-right-cart-box">
                            <p style={{color:'#7b2589'}}><StyledBadge badgeContent={cartItems.length} color='success' onClick={()=>navigate('cart')}><ShoppingBagIcon/></StyledBadge></p>
                            <p onClick={()=>navigate('cart')}>Cart</p>
                        </div>
                        {account ? (
                            <>
                            <div className="top-right-account-box" onClick={()=>handlelogs()}>
                            <p style={{color:'#7b2589'}} onClick={()=>navigate('login')}><Person4Icon/></p>
                            <p>{account}</p>
                            </div>
                            <div className='logout-button' style={{display:`${logDisplay}`}}><button onClick={()=>handlelogout()}>Logout</button></div>
                            </>
                        ):(
                            <div className="top-right-account-box" onClick={()=>navigate('login')}>
                            <p style={{color:'#7b2589'}} onClick={()=>navigate('login')}><Person4Icon/></p>
                            <p>My Account</p>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
            <div className="navbar-bottom">
                <div className="bottom-all">
                    <a onClick={()=>navigate('/')}>HOME</a>
                    <a href="#">OUR PRODUCTS</a>
                    <a href="#">COMBOS</a>
                    <a href="#">CONTACT US</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

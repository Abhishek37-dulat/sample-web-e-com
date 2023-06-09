import React, { useState } from 'react'
import './LoginUser.css'
import { useNavigate } from 'react-router-dom'
import {authenticatesLogin, authenticatesSignup} from '../../service/api'
import {DataContext} from '../../context/DataProvider'
import { useContext } from 'react'


const LoginUser = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({email: '', password: ''});
    
    const {setAccount} = useContext(DataContext)
    
    const handleOnChange = (e)=>{
        e.preventDefault()
        setDetails((det)=>({
            ...det, [e.target.name]:e.target.value
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await authenticatesLogin(details);
        if(response.status === 200){
          sessionStorage.setItem(
            "accessToken",
            `Bearer ${response.data.accessToken}`
          );
          sessionStorage.setItem(
            "refreshToken",
            `Bearer ${response.data.refreshToken}`
          );
          setAccount(response.data.data.firstname);
          setDetails({
            email: '',
            password: ''
        })
        navigate('/')
        }
        else{
          alert('Please Enter Valid Email or password')
        }
    }

    // const loginUser = async () => {
      
    //   if(response.status === 200){
    //     console.log("successfull");  
    //   }
    // }

  return (
    <div className='loginuser'>
      <div className="lu-left">
        <p style={{color: '#7B2589', fontSize: '20px'}}>New Customer</p>
        <p>Register Account</p>
        <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
        <button onClick={()=>navigate('/register')}>CONTINUE</button>
      </div>
      <div className="lu-right">
        <form onSubmit={handleSubmit}>
            <p style={{color: '#7B2589', fontSize: '20px'}}>Returning Customer</p>
            <p>I am a returning customer</p>
            <label>Mail</label>
            <input type='email' placeholder='email' name='email' value={details.email} onChange={e=>handleOnChange(e)}/>
            <label>Password</label>
            <input type='password' placeholder='Password' name='password' value={details.password} onChange={e=>handleOnChange(e)}/>
            <p style={{color: '#7B2589'}}>Forgotten Password</p>
            <button>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default LoginUser

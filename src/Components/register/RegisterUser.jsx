import React, { useState } from 'react'
import './RegisterUser.css'
import HomeIcon from '@mui/icons-material/Home';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';
import {authenticatesLogin, authenticatesSignup} from '../../service/api'
import {DataContext} from '../../context/DataProvider'


const RegisterUser = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({firstname: '', lastname: '', email: '', mobile: '', password: ''});
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOnChange = (e) =>{
        e.preventDefault();
        setDetails((det)=>({
            ...det, [e.target.name]: e.target.value
        })) 
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await authenticatesSignup(details);
        setDetails({
            firstname: '', lastname: '', email: '', mobile: '', password: ''
        })
        setConfirmPassword('');
    }

    console.log(details)
  return (
    <div className='registeruser'>
      <div className="registeruser-main">
        <div className="register-account">
            <div className="register-account-left">
                <p>Register Account</p>
            </div>
            <div className="register-account-right">
                <p onClick={()=>navigate('/')} style={{cursor: 'pointer'}}><HomeIcon/></p>
                <p><KeyboardDoubleArrowRightIcon/></p>
                <p style={{color: 'rgba(0,0,0,0.8)'}}>Register</p>
            </div>
        </div>
        <div className='toward-login'>
            <p>If you already have an account with us, please login at the <a style={{color:'#7B2589', textDecoration: 'none', fontWeight: 600}} href='/login'>Login page.</a></p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="register-personal-account">
            <div>
                <p style={{fontSize: '20px', marginTop: '1%', width: '100%', justifyContent: 'flex-start', color: 'rgba(0, 0, 0, 1)'}}>Your Personal Details</p>
            </div>
            <div>
                <p>First Name</p>
                <input type="text" placeholder='First Name' name='firstname' value={details.firstname} onChange={(e)=>handleOnChange(e)} />
            </div>
            <div>
                <p>Last Name</p>
                <input type="text" placeholder='Last Name' name='lastname' value={details.lastname} onChange={(e)=>handleOnChange(e)} />
            </div>
            <div>
                <p>E-Mail</p>
                <input type="email" placeholder='E-Mail' name='email' value={details.email} onChange={(e)=>handleOnChange(e)} />
            </div>
            <div>
                <p>Mobile</p>
                <input type="number" placeholder='Mobile' name='mobile' value={details.mobile} onChange={(e)=>handleOnChange(e)} />
            </div>
        </div>
        <div className="register-password-account">
            <div>
                <p style={{fontSize: '20px', marginTop: '1%', width: '100%', justifyContent: 'flex-start', color: 'rgba(0, 0, 0, 1)'}}>Your Password</p>
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder='Password' name='password' value={details.password} onChange={(e)=>handleOnChange(e)} />
            </div>
            <div>
                <p>Password Confirm</p>
                <input type="text" placeholder='Password Confirm' name='confirmPassword' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
            </div>
        </div>
        
        <div className='register-term-con'>
            <p>I have read and agree to the <span style={{color: '#7B2589', fontWeight:'600'}}>Privacy Policy</span> and <span style={{color: '#7B2589', fontWeight:'600'}}>Terms & Conditions</span> <input type='checkbox'/> <button style={{width:'120px', height:'40px', borderRadius:'4px', border:'none', backgroundColor:'#7B2589', color:'#fff'}}>REGISTER</button></p>
        </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser

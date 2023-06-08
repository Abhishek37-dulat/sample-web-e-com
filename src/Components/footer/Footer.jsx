import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
      <div style={{marginTop: '4%', marginRight:'8%'}}>
        <p><h4>CONTACT INFO</h4></p>
        <p style={{marginTop: '12px'}} className='footer-address'><span style={{marginRight: '5px'}}><b>Address: </b></span><span>Plot no. 151, 2nd Floor, Industrial Area <br/>Phase-I, Panchkula, Haryana-134119</span></p>
        <p style={{marginTop: '10px'}}><b>Contact: </b>7009121440</p>
        <p style={{marginTop: '10px'}}><b>Email: </b>info@nanykids.com</p>
      </div>
      <div style={{marginTop: '4%', marginRight:'5%'}}>
        <p><h4>INFORMATION</h4></p>
        <p style={{marginTop: '12px'}}>About Us</p>
        <p style={{marginTop: '10px'}}>Contact Us</p>
        <p style={{marginTop: '10px'}}>Privacy Policy</p>
        <p style={{marginTop: '10px'}}>Terms & Conditions</p>
        <p style={{marginTop: '10px'}}>Return Policy</p>
      </div>
      <div style={{marginTop: '4%', marginRight:'5%'}}>
        <p><h4>MY ACCOUNT</h4></p>
        <p style={{marginTop: '12px'}}>Login</p>
        <p style={{marginTop: '10px'}}>Register</p>
        <p style={{marginTop: '10px'}}>Forgotten Password</p>
      </div>
      <div style={{marginTop: '4%', marginRight:'5%'}}>
        <p><h4>FOLLOW US</h4></p>
        <p style={{marginTop: '12px'}}>
            <span style={{color: '#7B2589'}}><FacebookIcon sx={{backgroundColor: '#D4D4D4', borderRadius: '50%', padding: '5%'}}/></span>
            <span style={{color: '#7B2589'}}><InstagramIcon sx={{backgroundColor: '#D4D4D4', borderRadius: '50%', padding: '5%', marginLeft: '10%'}}/></span>
        </p>
      </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023, NanyKids. Powered by </p>
        <p><img src='https://nanykids.com/image/product/otherimage/icon-logo.png' alt='company' style={{width: '20px', height: '20px', marginLeft: '5px'}}/></p>
      </div>
    </div>
  )
}

export default Footer

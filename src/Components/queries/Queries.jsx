import React from 'react'
import './Queries.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MoneyIcon from '@mui/icons-material/Money';


const Queries = () => {
    console.log(comLogo[0])
  return (
    <div className='queries'>
      <div className="queries-top">
        <div>
            <p style={{color: '#65AF00'}}><LocalShippingIcon sx={{ fontSize: 40 }}/></p>
            <p style={{color: '#000', fontSize: '20px', fontWeight: '600'}}>Free Shipping</p>
            <p style={{color: 'rgba(0,0,0,0.5)', fontSize: '16px', fontWeight: '600'}}>On Orders Above Rs. 399</p>
        </div>
        <div>
            <p style={{color: '#65AF00'}}><MoneyIcon/></p>
            <p style={{color: '#000', fontSize: '20px', fontWeight: '600'}}>COD Available</p>
            <p style={{color: 'rgba(0,0,0,0.5)', fontSize: '16px', fontWeight: '600'}}>@ Rs. 40 Per Order</p>
        </div>
        <div style={{width:'40%'}}>
            <p style={{color: '#7B2589', fontSize: '24px', fontWeight: '400'}}>Have Queries or Concerns</p>
            <button><b>CONTACT US</b></button>
        </div>
      </div>
      <div className="queries-bottom">
        <div className='queries-bottom-left'>
            <div>
                <img src="https://nanykids.com/image/product/otherimage/nany_certified.png" alt="iso" />
                <p>ISO Certified</p>
            </div>
            <div>
                <img src="https://nanykids.com/image/product/otherimage/footer-icon-one.webp" alt="tested" />
                <p>Dermatologically Tested</p>
            </div>
            <div>
                <img src="https://nanykids.com/image/product/otherimage/footer-icon-two.webp" alt="iso" />
                <p>FDA Approved</p>
            </div>
        </div>
        <div className='queries-bottom-right'>
            <div>
                <p style={{fontSize: '20px'}}>PAYMENT</p>
            </div>
            <div>
                <img src="https://nanykids.com/image/product/otherimage/protection-icon.webp" alt="checked" />
                <p>100% Payment Protection, Easy Return Policy</p>
            </div>
            <div>
                {
                    comLogo.map((image)=>(
                        <img src={`${image}`} alt={`${image}`} style={{width: '50px', marginRight:'1%'}} />
                    ))
                }
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Queries



const comLogo = [
     'https://nanykids.com/image/product/otherimage/Phonepe.svg',
     'https://nanykids.com/image/product/otherimage/newUPI.svg',
     'https://nanykids.com/image/product/otherimage/newFreecharge.svg',
     'https://nanykids.com/image/product/otherimage/newAmex.svg',
     'https://nanykids.com/image/product/otherimage/newMobikwik.svg',
     'https://nanykids.com/image/product/otherimage/newVisa.svg',
     'https://nanykids.com/image/product/otherimage/newMastercard.svg',
     'https://nanykids.com/image/product/otherimage/newRupay.svg',
     'https://nanykids.com/image/product/otherimage/newNetbanking.svg'
]
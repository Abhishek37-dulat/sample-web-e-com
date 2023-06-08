import React from 'react'
import './DiscountSlip.css'

const DiscountSlip = () => {
  return (
    <div className='discountslip'>
        <div className="slip-left">
            <p>Dermatologically Tested & FDA Approved Products</p>
        </div>
        <div className="slip-right">
            <div className="slip-right-box">
                <p>Upto 10% Off Use <b>NANY10</b> Coupon Code</p>
            </div>
        </div>
    </div>
  )
}

export default DiscountSlip

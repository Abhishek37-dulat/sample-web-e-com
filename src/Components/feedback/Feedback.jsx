import React from 'react'
import './Feedback.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Feedback = () => {
  return (
    <div className='feedback'>
      <div className="feedback-main">
        <div className="feedback-title">
            <p>What Our Customers Say</p>
        </div>
        <div className="feedback-cards">
            <div className="card-left">
                <p className='card-left-p1'><FormatQuoteIcon/></p>
                <p className='card-left-p2' style={{  padding: '0px 5px', textAlign:'center'}}>Good lotion and very good long lasting fragrance. Helpful for moisturizing the dry skin which last for hours compared to any other lotions.</p>
                <p className='card-left-p3'>
                    S
                </p>
                <p className='card-left-p4'>
                    Santanu Mandal
                </p>
                <p className='card-left-p5'>Customer</p>
            </div>
            <div className="card-mid">
            <p className='card-mid-p1'><FormatQuoteIcon/></p>
                <p className='card-mid-p2' style={{  padding: '0px 5px', textAlign:'center'}}>Good lotion and very good long lasting fragrance. Helpful for moisturizing the dry skin which last for hours compared to any other lotions.</p>
                <p className='card-mid-p3'>
                    S
                </p>
                <p className='card-mid-p4'>
                    Santanu Mandal
                </p>
                <p className='card-mid-p5'>Customer</p>
            </div>
            <div className="card-right">
            <p className='card-right-p1'><FormatQuoteIcon/></p>
                <p className='card-right-p2' style={{  padding: '0px 5px', textAlign:'center'}}>Good lotion and very good long lasting fragrance. Helpful for moisturizing the dry skin which last for hours compared to any other lotions.</p>
                <p className='card-right-p3'>
                    S
                </p>
                <p className='card-right-p4'>
                    Santanu Mandal
                </p>
                <p className='card-right-p5'>Customer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback

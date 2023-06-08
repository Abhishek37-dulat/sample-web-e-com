import React from 'react'
import Slider from '../Components/slider/Slider'
import Products from '../Components/products/Products'
import Feedback from '../Components/feedback/Feedback'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Products/>
      <Products/>
      <Feedback/>
      
    </div>
  )
}

export default Home

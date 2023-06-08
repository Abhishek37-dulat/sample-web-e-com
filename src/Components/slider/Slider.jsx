import React, { useState } from 'react'
import './Slider.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const slides = [
    {url: "https://nanykids.com/image/slides/new_banner1.jpg"},
    {url: "https://nanykids.com/image/slides/Nany_Web_Banner.jpg"},
    {url: "https://nanykids.com/image/slides/Nany_baby_Wash.jpg"},
    {url: "https://nanykids.com/image/slides/new_banner3.jpg"},
    {url: "https://nanykids.com/image/slides/Nany_baby_Wash.gif"}
]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles ={
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

  return (
    <div className='slider' >
        <div className="left-arrow" onClick={goToPrevious}><NavigateBeforeIcon className='left-arrow-main'/></div>
        <div className="right-arrow" onClick={goToNext}><NavigateNextIcon className='right-arrow-main'/></div>
      <div style={slideStyles}></div>
    </div>
  )
}

export default Slider

import React, { useState } from 'react'
import Images from "./Images"
import {Link} from "react-router-dom"
const Home = () => {
  const [sliderIMG , setSliderIMG] = useState(0)
  function slideLeft(){
    if(sliderIMG < 2){
     setSliderIMG(prev => prev + 1) 
    }
    else{
      setSliderIMG(0) 
    }
  }
  function slideRight(){
    if(sliderIMG > 0){
      setSliderIMG(prev => prev - 1) 
     }
     else{
       setSliderIMG(2) 
     }
  }
  return (
    <div className='homeMainDiv'>
      <div className='first-section-main-div'>
        <div className='changingImg'>
          <img className='img' src={Images[sliderIMG].Img}/>
        </div>
        <div className='discover-innovative-card'>
        <h1>Discover innovative ways to decorate</h1>
        <p>We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
        <Link className='link' to='/shop'><h2 className='discoverInoh2' >SHOP NOW <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg></h2></Link>
        <div className='slider-main-div'>
          <div onClick={slideLeft} className='slider left'></div>
          <div onClick={slideRight} className='slider right'></div>
        </div>
        </div>
    </div>
    <div className='second-section-main-div'>
      <div className='secondSec-FirstIMG'></div>
      <div className='secondSec-SecondCard'>
        <h2>ABOUT OUR FURNITURE</h2>
        <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <div className='secondSec-SecondIMG'></div>
    </div>
    </div>
  )
}

export default Home
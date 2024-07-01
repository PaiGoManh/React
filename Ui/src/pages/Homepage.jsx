import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import View from '../components/View'


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Cards num={3} name={'Top Courses'}/>
    {/* <Cards isHome={true}/> */}
    <View/>
    
   </>
  )
}

export default Homepage
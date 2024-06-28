import React from 'react'
import rp from '../assets/images/rp.png'

function Crd({props} ) {
  return (
    <>
    <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <h2 className=' font-bold text-lg text-purple-900 '>{props.title}</h2>
      <img src={rp} alt="course thumbnail" className='w-80 h-40 ' />

      <p className='text-black group-hover:text-white my-2 mx-5'>{props.description}</p>
      <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">Learn More</a>
    </div>
    </>
    
  )
}

export default Crd;
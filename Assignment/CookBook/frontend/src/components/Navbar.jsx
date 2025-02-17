import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './Logout'

const Navbar = () => {
  return (
    <>
        <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
                <div className='flex items-center'>

                    <Link to="/" >
                        {/* <img className='m-1p-2 size-12' src={logo} alt="logo" /> */}
                    </Link>
                <div>
                    <input type='search' placeholder='Search Recipe' className='p-2 pl-[8%]'/>
                </div>
                </div>
                <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
                    <Link to="/home" className='ml-20'>Home</Link>
                    <Link to="/addRecipe" className='ml-20'>Add Recipe</Link>
                    <Logout/>
                </div>
        </div>
    </>
  )
}

export default Navbar
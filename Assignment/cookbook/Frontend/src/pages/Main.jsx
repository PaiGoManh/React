import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from './Homepage';
import Favourites from './Favourites';
import AddRecipe from './AddRecipe';

const Main = () => {

  return (
    <div className='bg-black text-white'>
      <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path='/addRecipe' element={<AddRecipe/>} />
          </Routes>
    </div>
  );
};

export default Main;

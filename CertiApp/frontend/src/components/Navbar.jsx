import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-end p-4'>
      <Link className="border bg-cyan-700 px-8 py-2 mr-2 text-white" to="/">Home</Link>
      <Link className="border bg-cyan-700 px-8 py-2 mr-2 text-white" to="/certificates">Issue Certificate</Link>
    </div>
  );
};

export default Navbar;

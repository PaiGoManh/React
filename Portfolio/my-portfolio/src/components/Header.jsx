import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-black h-16 flex items-center justify-between text-white px-20">
      <div className="font-bold text-3xl text-orange-500">Rahul</div>
      <div className="flex gap-8 text-xl">
        <a href="#home" className="hover:text-orange-500">Home</a>
        <a href="#about" className="hover:text-orange-500">About</a>
        <a href="#education" className="hover:text-orange-500">Education</a>
        <a href="#skills" className="hover:text-orange-500">Skills</a>
        <a href="#projects" className="hover:text-orange-500">Projects</a>
        <a href="#contact" className="hover:text-orange-500">Contact</a>
      </div>
    </nav>
  );
};

export default Header;

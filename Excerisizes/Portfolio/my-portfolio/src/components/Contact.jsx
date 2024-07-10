import React from 'react';

const Contact = () => {
  return (
    <div className="text-center text-white pt-40" id="contact">
      <h1 className="text-2xl">How can you communicate?</h1>
      <h1 className="text-4xl font-bold text-orange-500">Contact me</h1>
      <form className="mx-auto w-1/2 mt-10">
        <div className="flex gap-4">
          <input type="text" placeholder="Your name" className="w-1/2 h-10 p-2" />
          <input type="email" placeholder="Enter Email" className="w-1/2 h-10 p-2" />
        </div>
        <textarea placeholder="Write Something" className="w-full h-40 p-2 mt-4"></textarea>
        <button className="w-1/3 h-10 bg-orange-500 text-white mt-4">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

import React from 'react';
// import Logo from './logo.png'

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-50">
      <h1 className="font-extrabold text-3xl mb-7 text-gray-800 mt-[-15%]">Certificate DApp</h1>
      <div className="pb-4">
        {/* <img src={Logo} /> */}
      </div>
      <input
        type="text"
        id="certificateID"
        name="certificateID"
        className="border-2 border-gray-800 p-2 mb-4 rounded"
        placeholder="Enter Certificate ID to View"
      />
      <button className="border bg-cyan-700 px-8 py-2 rounded text-white hover:bg-cyan-800">
        Search
      </button>
    </div>
  );
};

export default Home;

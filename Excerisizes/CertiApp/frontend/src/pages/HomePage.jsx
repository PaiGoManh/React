import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/2000920.png'

const Home = () => {

  
  const [certId, setCertId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5000/certificates/${certId}`);
      if (!res.ok) {
        throw new Error('Certificate not found');
      }
      const data = await res.json();
      navigate(`/certificate/${certId}`, { state: { certificateData: data } });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-50">
      <h1 className="font-extrabold text-3xl mb-7 text-gray-800 mt-[-15%]">Certificate DApp</h1>
      <img src={img} alt='image' width={200}/>
      <input
        type="text"
        id="certificateID"
        name="certificateID"
        className="border-2 border-gray-800 p-2 mb-4 rounded"
        placeholder="Enter Certificate ID to View"
        value={certId}
        onChange={(e) => setCertId(e.target.value)}
      />
      <button
        className="border bg-cyan-700 px-8 py-2 rounded text-white hover:bg-cyan-800"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default Home;

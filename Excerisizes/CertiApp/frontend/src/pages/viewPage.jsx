import React from 'react';
import { useLocation } from 'react-router-dom';

const Certificate = () => {
  const location = useLocation();
  const { certificateData } = location.state || {};

  if (!certificateData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="relative border-2 border-gray-300 p-8">
        <div className="absolute inset-0 border-4 border-gray-500"></div>
        <div className="relative bg-white p-8 border-8 border-gray-400">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-cursive">Kerala Blockchain Academy</h2>
          </div>
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="w-2/12"></div>
              <div className="underline text-center font-bold w-8/12">
                <span id="name">Name: {certificateData.name}</span>
              </div>
              <div className="w-2/12"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="w-2/12"></div>
              <div className="text-center w-8/12">
                <span className="block italic">has earned</span>
                <span id="grade" className="block font-bold">Grade: {certificateData.grade}</span>
              </div>
              <div className="w-2/12"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="w-2/12"></div>
              <div className="text-center w-8/12">
                <span className="block italic">while completing the training course entitled</span>
              </div>
              <div className="w-2/12"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="w-2/12"></div>
              <div className="underline text-center font-bold w-8/12">
                <span id="course">Course: {certificateData.course}</span>
              </div>
              <div className="w-2/12"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-between">
              <div>
                <span id="ID" className="block font-bold">Certificate ID: {certificateData.certificateID}</span>
              </div>
              <div className="text-right">
                <span id="date" className="block">Date of Completion: {certificateData.dateOfCompletion}</span>
                <span className="block">Place: Trivandrum</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <br /><br />
            <span className="block font-bold">(sd/-)</span>
            <span className="block font-bold">Director</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;

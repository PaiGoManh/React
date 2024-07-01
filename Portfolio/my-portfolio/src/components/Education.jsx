import React from 'react';

const Education = () => {
  return (
    <div className="text-center text-4xl text-white pt-40 font-bold" id="education">
      <h1>Education</h1>
      <div className="flex justify-center gap-8 pt-10">
        <div className="bg-gray-800 w-96 p-6">
          <div className="year">2017-2020</div>
          <div className="course">Bachelor of Computer Applications</div>
          <div className="university">Nirmala College Muvattupuzha</div>
          <div className="university">Mahathma Gandhi University Kotayam</div>
        </div>
        <div className="bg-gray-800 w-96 p-6">
          <div className="year">2022-2024</div>
          <div className="course">Masters in Computer Applications</div>
          <div className="university">Cochin University of Science & Technology</div>
          <div className="university">Kalamasherry, Ernakulam</div>
        </div>
        <div className="bg-gray-800 w-96 p-6">
          <div className="year">2024-2025</div>
          <div className="course">PG Diploma in Blockchain Architect</div>
          <div className="university">Kerala Blockchain Academy</div>
          <div className="university">Digital University of Kerala</div>
        </div>
      </div>
    </div>
  );
};

export default Education;

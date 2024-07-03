import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IssueCertificate = () => {
  const [course, setCourse] = useState('');
  const [certId, setCertId] = useState('');
  const [cname, setCname] = useState('');
  const [date, setDate] = useState('');
  const [grade, setGrade] = useState('');
  const [place, setPlace] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    const newCertificate = {
      course,
      certificateID: certId,
      name: cname,
      dateOfCompletion: date,
      grade,
      place,
    };
    console.log("Date",date)
    const res = await addSubmitCertificate(newCertificate);
    toast.success("Certificate Added Successfully");
  };

  const addSubmitCertificate = async (cert) => {
    const res = await fetch('http://localhost:5000/certificates', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cert)
    });
    return res;
  };

  return (
    <div>
      <ToastContainer/>
      <h1 className="text-2xl font-bold">Certificate DApp</h1>
      <br />
      <div>
        <h3 className="text-center text-3xl font-bold mb-4">Issue New Certificate</h3>
        <div className="flex flex-col justify-center items-center">
          <form onSubmit={submitForm} method="POST">
            <div className="border-2 rounded px-20">
              <div className="p-2">
                <label className="block" htmlFor="courseName">Select Course *</label>
                <select className="border-2 border-black" name="course" id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}>
                  <option>Certified Blockchain Associate</option>
                  <option>Certified Ethereum Developer</option>
                  <option>Blockchain Foundation</option>
                  <option>Ethereum Fundamentals</option>
                </select>
              </div>
              <div className="p-2">
                <label className="block" htmlFor="certificateID">Certificate ID *</label>
                <input type="text" className="border-2 border-black" name="certificateID" id="certificateID" placeholder="Certificate ID" required
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)} />
              </div>
              <div className="p-2">
                <label className="block" htmlFor="candidateName">Candidate Name *</label>
                <input type="text" className="border-2 border-black" name="name" id="name" placeholder="Name" required
                  value={cname}
                  onChange={(e) => setCname(e.target.value)} />
              </div>
              <div className="p-2">
                <label className="block" htmlFor="grade">Select Grade *</label>
                <select className="border-2 border-black" id="grade" name="grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
                  <option>S</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div className="p-2">
                <label className="block" htmlFor="date">Issue Date *</label>
                <input type="date" className="border-2 border-black" id="date" name="date" required value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <button className="border-2 bg-orange-700 hover:bg-orange-400 mt-6 ml-10 text-white px-4 py-2" type="submit">Issue Certificate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IssueCertificate;

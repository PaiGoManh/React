import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();

  const loginForm = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,password,
    };

  const res = await fetch('http://localhost:5000/login',{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(loginDetails)
  })

  if(res.ok){
    const data =await res.json();
    // const userType = data.userType;
    alert(`Logging`)
    return navigate("/home");
  }else{
    alert(`incorrect user`)
    return navigate('/')
  }
}

  return (
    <div className="bg-purple-100 flex items-center justify-center h-screen">
    <div onSubmit={loginForm} className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
        Login
      </h2>
      <form onSubmit={loginForm}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Login
          </button>
            Forgot Password?
        </div>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to='/signup'>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  </div>
  )
}


const getUserType = () =>{
  const authToken = document.cookie
  .split(";")
  .find((row) => row.startsWith("Authtoken"))
  ?.split("=")[1];

  const decoded = jwtDecode(authToken);
  const userType = decoded.userType;
  return userType
}

export {Login as default, getUserType};
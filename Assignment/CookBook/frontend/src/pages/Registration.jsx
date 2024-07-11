import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userType,setUserType] = useState('admin');
    const navigate = useNavigate();

    const signupSubmit = async (userdetails) =>{
        const res = await fetch('http://localhost:5000/signup',{
            method : "POST",
            headers:{
                'Content-Type' : "application/json",
            },
            body : JSON.stringify(userdetails)
        });

        if(res.ok){
            alert("Succes");
            return navigate("/");
            
        }else{
            alert(`Please check the input data`);
            return navigate("/signup");
        }

    }

    const signupForm = (e) =>{
        e.preventDefault();
        const userdetails = {
            name,email,password,userType
        } 
        console.log("user",userdetails)
        signupSubmit(userdetails)
    }


  return (
    <div className="bg-purple-100 flex items-center justify-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
          Sign Up
        </h2>
        <form onSubmit={signupForm}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                User Type
              </label>
              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(e)=>setUserType(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
     
              </select>
            </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to='/'>
                Login
            </Link>

          </p>
        </form>
      </div>
    </div>
  )
}

export default Registration
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()
    const logout = async () => {
        try {
            const res = await fetch('http://localhost:5000/logout')
            if(res.ok){
                alert('Logout success')
                navigate('/')
            }
        } catch (error) {
            alert('Something went wrong')
        }
    }

    return <button onClick={logout}>Logout</button>
    
}

export default Logout
import React, { useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home')
        }, 2000 )
    },[])
  return (
    <div className='landing'>
        <img src="https://rsr-tours.com/static/media/logoRSR.520d3b5c1fbc05c845d5.jpg" alt="loading" />
    </div>
  )
}

export default Landing
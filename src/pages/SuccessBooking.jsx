import React from 'react'
import './style.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SuccessBooking() {
    const navigate = useNavigate()
  return (
    <div className='p-3 text-center'>
      <div className="row">
        <div className="col-md-5 m-auto">
        <div className="">
        <img src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/media/90211520c82920dcaf6aea7604aeb029.gif" alt="success" className='success-image' />
        <h1 className="fs-4">Success 👍</h1>
        <p className="fs-6 text-secondary">Your Ride Booking is success please wait till driver confirm your ride.</p>

            <Button variant='contained' onClick={()=>navigate('/')}>Track your ride</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessBooking
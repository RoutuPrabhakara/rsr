import { Button } from '@mui/material'
import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function NoData() {
    const navigate = useNavigate()
  return (
    <div className='nodata container-fluid'>
        <div className="row">
            <div className="col-md-5 m-auto text-center">
                <img src="https://cdnl.iconscout.com/lottie/premium/thumb/cat-playing-with-ball-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--play-kitten-kitty-pack-animal-icons-5473699.gif" alt="nodata" />
                <h1 className="fs-3 fw-bold">Oh no, No data found</h1>
                <p className='fs-6 text-secondary'>no wories you can book your first ride now</p>
                <Button variant='contained' onClick={()=>navigate('/home')}>Book Now</Button>
            </div>
        </div>
    </div>
  )
}

export default NoData
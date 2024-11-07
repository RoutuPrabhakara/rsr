import React from 'react'
import './style.css'
import SelectDriver from '../routes/Routes'

function Home() {
  return (
    <div className='home'>
        <div className="hero p-3">
            <h1 className="display-3 fw-bold text-warning">RSR Transportation</h1>
            <p className="fs-5">Indentity Verified <i class="bi bi-patch-check-fill text-success"></i></p>
            <p className="fs-6">Discover a world of convenience with RSR Tours, where we redefine transportation services to cater to all your needs. From car rentals to hourly rentals, airport taxi services, local taxi rides, and outstation journeys, we've got you covered.</p>
            <div className="d-flex gap-2">
              <a  href="/about" className="btn btn-light">About us</a>
              <a href='/contact' className="btn btn-outline-light">Contact us</a>
            </div>
        </div>
        <SelectDriver/>
    </div>
  )
}

export default Home
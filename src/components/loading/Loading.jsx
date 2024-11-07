import React, { useEffect } from 'react'
import './style.css'

function Loading() {
 
  return (
    <div className='loading'>
        <img src="https://i.pinimg.com/originals/59/09/76/59097644ada257296db3d19882f84ed6.gif" alt="loading.." />
        <h1 className="fs-4 mt-3">Loading...</h1>
    </div>
  )
}

export default Loading
import React from 'react'
import { Link } from 'react-router-dom'

export default function ThankYouPage() {
  return (
    <div className="container d-flex justify-content-center py-5">
      <div>
      <img src="./assets/img/thankyou.png" width="300" alt="" />
      <h2 className='text-center'>We appreciate your time</h2>
      <p className="text-center"><Link to="/" className='text-decoration-none'>Go Back</Link></p>
      </div>
    </div>
  )
}

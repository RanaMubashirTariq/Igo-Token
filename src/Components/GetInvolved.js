import React from 'react'
import './GetInvolved.css'

export default function GetInvolved() {
  return (
    <div className="get-involved-container">
    <h1 className="title">Get Involved</h1>
    <p className="subtitle">
      Feel free to send us your questions or request a free consultation.
    </p>
    <div className="input-container">
      <input type="email" placeholder="Enter Your Email" className="email-input" />
      <button className="get-started-btn">Get Started</button>
    </div>
    <div className="info-box">
      <p className="info-text">
        Step into the revolution of digital real estate with IGO. Trade, invest, and grow your wealth
        with a platform designed for you.
      </p>
       <img src="/Pictures/large-arrow.svg" alt="" />
    </div>
  </div>
  )
}

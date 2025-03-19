import React from 'react'
import './FooterSection.css';


export default function FooterSection() {
  return (
    <footer className="footer-container">
    <div className="footer-content">
      
      <div className='footer-line'><hr/></div>
      

      <div className="footer-disclaimer">
        <h4>Disclaimer +</h4>
        <p>
          Investing in IGO tokens involves risks, including market volatility
          and potential loss of funds. Tokens are subject to vesting
          schedules and may not be immediately available after purchase. This
          website does not offer financial advice—always conduct your own
          research before investing. By using this platform, you agree to our
          terms and conditions.
        </p>
      </div>

      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Tokenomis</a>
        <a href="#">Platform</a>
        <a href="#">Contact us</a>
      </div>

      <div className="footer-contact">
        <div className="footer-item">
          <h5>SIGN UP</h5>
          <p>+000 0000 0000</p>
        </div>
        <div className="footer-item">
          <h5>EMAIL</h5>
          <p>Contact@igotoken.io</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2025 — IGO Copyright</p>
      </div>
    </div>
  </footer>
  )
}

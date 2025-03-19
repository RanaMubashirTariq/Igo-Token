import React from "react";
import "./MainSection.css";

export default function MainSection() {
  return (
    <div className="hero-container">
        <div className="hero-right-container">
      <button className="unlock-btn">Unlock Real Estate</button>
      <h1 className="hero-title">
        OWN <em>THE FUTURE</em> OF REAL ESTATE
      </h1>
      <div className="info-container">
        <div className="info-box-1">
          <ul>
            <li>Vision</li>
          <p>We are building a future where decentralization is the norm, providing users with more control and empowerment in the digital economy</p>
          </ul>
        </div>
        <div className="info-box-1">
        <ul>
            <li>Strength</li>
          <p> IGO offers a secure and stable foundation for users, with transparency and trust at the core of every transaction</p>
          </ul>
        </div>
        <div className="info-box-1">
        <ul>
            <li>Innovation</li>
          <p>We are at the forefront of the digital revolution, creating new solutions that challenge traditional financial systems</p>
          </ul>
        </div>
      </div>
        </div>
      <div className="image-section">
           <div className="profile-logo"><img src="/Pictures/Profile-icon.svg" alt="" /></div>
           <img src="/Pictures/igo-coin.png" alt="" className="pic-2" />
           <div className="heading-section">
             <h2>27K+</h2>
             <p>Solde Tokens</p>
           </div>
      </div>
      <div className="igo-coin">
        <img src="/Pictures/igo.svg" alt="" />
      </div>
      <div className="social-links">
               <div className="social-para"><p>Innovation strength & vision</p></div>
               <div className="social-line"><img src="/Pictures/line.svg" alt="" /></div>
               <div className="horizental"><img src="/Pictures/horizental.svg" alt="" /></div>
               <div className="social-link-div">
                <a href="#"><img src="/Pictures/facebook.svg" alt="" /></a>
                <a href="#"><img src="/Pictures/insta.svg" alt="" /></a>
                <a href="#"><img src="/Pictures/tiwitter.svg" alt="" /></a>
               </div>
      </div>
       
        <div className="log-pin"><img src="/Pictures/log-pin.svg" alt="" /></div>
    </div>
  );
}





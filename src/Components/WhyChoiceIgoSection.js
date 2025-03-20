import React from 'react'
import './WhyChoiceIgoSection.css';


export default function WhyChoiceIgoSection() {
  return (
    <div className="feature-card">

           <div className='choice-igo-right-div'>
                   <div className='right-inner-div'>
                   <div className="scroll-line"></div> 
                       <div className='part-1-content-div'>
                             <div className='icon-section'>
                              <img src="/pictures/discover-uniqe.svg" alt="" />
                               <h4>Discover Unique Digital Assets</h4>
                              </div> 
                              <div className='part-1-inner-content-div'><p>Explore a diverse range of digital collectibles, including artwork, music, videos, virtual real estate, and more, each authenticated and secured by blockchain technology.</p></div>
                       </div>

                       {/*  part 2 */}

                       <div className='part-1-content-div'>
                             <div className='icon-section'>
                              <img src="/pictures/personalized.svg" alt="" />
                               <h4>Personalized Recommendations</h4>
                              </div> 
                              <div className='part-1-inner-content-div'><p>Receive personalized recommendations based on your interests and preferences, ensuring that you never miss out on the latest drops or trending NFTs.</p></div>
                       </div>
                        
                   </div>
           </div>


          <div className='choice-igo-secion-left-div'>
            <h4>Why Choose IGO?</h4>
            <p>We are building a future where decentralization is the norm, providing users with more control and empowerment in the digital economy.<br/><br/> IGO offers a secure and stable foundation for users, with transparency and trust at the core of every transaction.<br/><br/>We are at the forefront of the digital revolution, creating new solutions that challenge traditional financial systems</p>
            <button>Learn More</button>
          </div>
  </div>
  )
}

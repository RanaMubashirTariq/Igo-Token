import React, { useState } from "react";
import './MainSection2.css';


export default function MainSection2() {

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
      setOpenAccordion(openAccordion === index ? null : index);
    };

  return (
       <div className="main-section-div-2">
                <div className="right-section-div">
                    <h2>Empowering <span>Real Estate</span> Through <span>Crypto</span></h2>
                    <div className="igo-3k-div">
                          <div className="igo-pic"><img src="/Pictures/igo-pic.svg" alt="" /></div>
                        <div className="inner-3k-div">
                               <div className="inner-div-describtion">
                                  <h2>30K<sup>+</sup></h2>
                                  <p>Join Over 30K Users Who Trust Our Project</p>
                               </div>
                               <div className="link-3k-div"><a href="/">Learn more</a>
                                  <img src="/Pictures/right-arrow.svg" alt="" />
                               </div>
                        </div>
                    </div>
                </div>


                <div className="left-section-div">
                    <img src="/Pictures/building.svg" alt="" />
                    <p>We are at the forefront of a Real Estate revolution, leveraging the power to create  more inclusive, secure, and transparent ecosystem.</p>
                     


                    <div className="accordion">
                                            {[
                                                "Inclusive Financial Solutions",
                                                "Security and Transparency",
                                            ].map((title, index) => (
                                                <div key={index} className="accordion-item">
                                                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                                    <span>{index + 1}. {title}</span>
                                                    <span className="arrow">{openAccordion === index ? "▲" : "▼"}</span>
                                                </div>
                                                {openAccordion === index && (
                                                    <div className="accordion-content">Content for {title}.</div>
                                                )}
                                                </div>
                                            ))}
                                            </div>
                
                </div>
       </div>
  )
}

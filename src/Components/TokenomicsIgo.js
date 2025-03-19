import React from 'react'
import './TokenomicsIgo.css';


export default function TokenomicsIgo() {

   
    const allocationData = [
        { name: "Pre-Sale", percentage: "20%", highlighted: false },
        { name: "Team and Advisors", percentage: "15%", highlighted: false },
        { name: "Airdrop Partnerships", percentage: "5%", highlighted: false },
        { name: "Partnerships + DAO Treasury", percentage: "10%", highlighted: true },
        { name: "Ecosystem Development", percentage: "20%", highlighted: false },
        { name: "Marketing Fund", percentage: "15%", highlighted: false },
        { name: "IGO Platform", percentage: "5%", highlighted: false },
        { name: "IGO Foundation", percentage: "7.5%", highlighted: false },
        { name: "Liquidity", percentage: "5%", highlighted: false },
      ];



  return (
    <div className='teknomics-main-div'>
             <div className='teknomics-right-div'>
                      <h2>IGO Tokenomics</h2>
                      <p>The IGO Tokenomics structure ensures sustainable growth and value within the ecosystem. With carefully allocated funds, IGO Token supports rewards, development, and governance, empowering community involvement while driving long-term stability.<br/>

This balanced distribution fosters an accessible and robust foundation for Real Estate Platform and asset tokenization. </p>
                      <button>Learn More</button>
             </div>


            {/* part 2 */}

              <div className='teknomics-igo-left-div'>

              <div className="token-allocation-container">
      {allocationData.map((item, index) => (
        <div
          key={index}
          className='allocation-item'
        >
          <span className="allocation-name">{item.name}</span>
          <span className="allocation-percentage">{item.percentage}</span>
        </div>
      ))}
    </div>
              </div>
    </div>
  )
}

import React ,{useState} from 'react'
import './ByIgo.css';

export default function ByIgo() {


    const [value, setValue] = useState("");

  return (
    <div className='by-igo-main-div'>
           <div className='by-igo-right-div'>
                    <div className='ny-igo-heading-div-1'>
                         <h2>BUY IGO<br/>
                         <span>IGO = $1.00</span></h2>
                    </div>

                    {/* part 2 */}


                    <div className='ny-igo-heading-div-2'>
                        <p>You Pay (USDT)</p>
                    </div>

                    {/* part 3 */}

                    <div className='ny-igo-heading-div-3'>
                        <p>12993.223</p>
                    </div>

                    {/*  part 4 */}

                    <div className="crypto-input-container">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="crypto-input"
                        />
                            <div className="crypto-dropdown">
                                <img src='/Pictures/T.svg' alt="Tether" className="crypto-logo" />
                                 <img src="/Pictures/downArrow.svg" alt="" className='img-2'/>
                            </div>
                    </div>


                    {/* part 5 */}

                    <div className='ny-igo-heading-div-5'>
                        <img src="/Pictures/igo-pic.svg" alt="" />
                    </div>


                    {/*  part 6 */}

                    <div className='ny-igo-heading-div-2'>
                        <p>You Receive (IGO)</p>
                    </div>


                    {/* part 7 */}


                    <div className="crypto-input-container">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="crypto-input"
                        />
                            <div className="crypto-dropdown">
                                <img src='/Pictures/igo-progfile.svg' alt="Tether" className="crypto-logo" />
                            </div>
                    </div>


                    {/*  part 7 */}
                       
                       <div className='buy-now'>
                           <button>Bay Now</button>
                       </div>
           </div>


           <div className='bay-igo-left-div'>
                 <div className='igo-coin10-div'><img src="/Pictures/igo-coin10.svg" alt="" /></div>
          
                  <div className='inner-bay-igo-div'>
                     <div className='wraper-sale-div'><p>Pre-sale</p></div>
                     <h4>Driving the Future of <span>Real Estate</span></h4>
                     <p>We are dedicated to leading the charge in developing innovative cryptocurrency solutions that shape the future of Real Estate.</p>
                     <button>Connect wallet</button>
                  </div>
          
           </div>
    </div>
  )
}

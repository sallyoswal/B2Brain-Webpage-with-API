import React from 'react'
import "./scroll.scss"
import c1 from "./c1.jpg"
import c2 from "./c2.png"
import c3 from "./c3.jpg"
import c4 from "./c4.png"
import c5 from "./c5.jpg"
import p1 from "./p1.png";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

export const Scroll = () => {
  return (
    <div className='sd'>
        <div className="sd-top">
            <div className="sd-title">
                <h1>Trusted by enterprise sales teams globally</h1>
            </div>
            <div className='brandlogo'>
                <img className='brandlogoicon' src={c1}/>
                <img className='brandlogoicon' src={c2}/>
                <img className='brandlogoicon' src={c3}/>
                <img className='brandlogoicon' src={c4}/>
                <img className='brandlogoicon' src={c5}/>
                </div>
        </div>
        <div className='sd-bottom'>
            <div className="sd-bottom-title">
                <h1>Hear from our customers</h1>
            </div>
            <div className='sd-card-one'>
              <div className='sd-card-left-one'><FormatQuoteRoundedIcon className='quote'/></div>
                <div className='sd-card-content-one-right'>Set up conversation with a hard-to-crack account, within a week of starting with B2Brain
                <div className='sd-card-one-mini'>Augie Hoffman, SDR Manager</div>
                <img className='commenticon' src={c1}/>
              </div>
      
            </div>
            <div className='sd-card-two'>
              <div className='sd-card-left-two'><FormatQuoteRoundedIcon className='quote'/></div>
              <div className='sd-card-content-two-right'>Salesloft got 12% higher responses with personalization using B2Brain intel
                <div className='sd-card-two-mini'>William Sturgis, Enterprise SDR</div>
                <img className='commenticon' src={c1}/>
              </div>
            </div>
            

        </div>
    </div>
  )
}

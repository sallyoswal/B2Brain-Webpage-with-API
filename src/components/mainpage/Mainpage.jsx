import React from 'react'
import "./mainpage.scss"
import girl from "./girl.png"

export const Mainpage = () => {
  return (
    <div className='mainpage'>
        
        <section>
        <div className="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
        </section>
        <div className='mpleft'>
            <div className='mp-left-wrapper'>
                <h1 className='heading'>Increase your pipeline by <p className='Highlight'>35-150%</p>
                <p className='hnote'>Automated account intelligence for your sales team</p></h1>
            </div>
        </div>
        <div className='mpright'>
            <img className='girl' src={girl}/>
        </div>
        </div>
  )
}

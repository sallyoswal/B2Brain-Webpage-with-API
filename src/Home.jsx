import React from 'react'
import { Mainpage } from './components/mainpage/Mainpage';
import Navbar from './components/navbar/Navbar';
import { Scroll } from './components/scrolldowned/Scroll';
import { Sidebar } from './components/sidebar/Sidebar';
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
        <Navbar/>
        <Mainpage/>
        <Scroll/>
        </div>
    </div>
  )
}

export default Home
import React, {useEffect} from 'react'
import './home.css'
import video from '../Assest/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContainer'>
        <div className='textDiv'>

        <span data-aos='fade-up' className='smallText'>
          Our Packages
          </span>  
        

        <h1 data-aos='fade-up' className='homeTitle'>
          Search Your Holiday
        </h1>
        <div data-aos='fade-up' className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'> Search Your Destination : </label>
            <div className='input flex'>
              <input type='text' placeholder='Enter Your Name Here...!' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className='dateInput'>
            <label htmlFor='date'> Select Your Date : </label>
            <div className='input flex'>
              <input type='date' />
            </div>
          </div>
          <div className='searchOptions flex'>
            <HiFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos='fade-up' className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <SiTripadvisor className='icon' />
          </div>
          <div className='leftIcons'>
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Home
import React from 'react'
import './footer.css'
import video2 from '../Assest/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us...!</h2>
          </div>

          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon' />

            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
               <MdOutlineTravelExplore className='icon'/> Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias voluptatum necessitatibus consectetur, amet corrupti, natus placeat est blanditiis recusandae, tenetur iure? Culpa rem harum hic doloribus! Et, officiis maiores...!
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
              </div>            
              
              {/* Group Three */}
              <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Mumbai City
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Thane
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Palghar
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Raigad
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Ratnagiri
              </li>
            </div>

            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
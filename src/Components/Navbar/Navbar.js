import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
 const [active, setActive] = useState('navBar')

// Function to toggle navbar
   const showNav = () => {
  setActive('navBar activeNavbar')
}

// Function to remove navbar
const removeNavbar = () => {
  setActive('navBar')
}
  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>< MdOutlineTravelExplore className="icon"/> Travel.</h1>
          </a>
        </div>
        <div className= {active}>
          <ul className="navLists flex ">

            <button className="btn1">
              <a href="#">Home</a>
            </button>

            {/* <button className="btn">
              <a href="#">Packages</a>
            </button> */}

            <button className="btn1">
              <a href="#">Shop</a>
            </button>

            <button className="btn1">
              <a href="#">About</a>
            </button>

            <button className="btn1">
              <a href="#">Pages</a>
            </button>

            {/* <button className="btn">
              <a href="#">News</a>
            </button> */}
            
            <button className="btn1">
              <a href="#">Contact</a>
            </button>
            <button className= 'btn'>
              <a href="#"> BOOK NOW </a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className= "icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>
  )
}
export default Navbar
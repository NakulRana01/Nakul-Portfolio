import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu()
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
        <a href='https://www.NRana.Portfolio' target='_blank' rel="noreferrer">
            <img
              className='logo'
              src='./assets/images/logo.png'
              alt='Nakul Logo'
            />
          </a>

          <ul>
            <li>
              <p onClick={() => handleScroll('hero')} className='menu-item'>
                Home
              </p>
            </li>

            <li>
              <p onClick={() => handleScroll('skills')} className='menu-item'>
                Skills
              </p>
            </li>

            <li>
              <p
                onClick={() => handleScroll('divided-container')}
                className='menu-item'
              >
                Education
              </p>
            </li>

            <li>
              <p onClick={() => handleScroll('Project')} className='menu-item'>
                Projects
              </p>
            </li>

            <li>
              <p onClick={() => handleScroll('contact')} className='menu-item'>
                Contact Me
              </p>
            </li>

            <button
              className='contact-btn'
              onClick={(e) => {
                window.open(
                  'https://drive.google.com/file/d/1cIMT8pBs-5DlTZsROFQ-sNuqE4BDGtOU/view?usp=drivesdk',
                  '_blank'
                )
              }}
            >
              Download CV
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav

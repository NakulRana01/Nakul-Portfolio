import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='hero' className='hero-container'>
      <div className='hero-container-left'>
        <div className='hero-content'>
          <h3>Hello, I've</h3>
          <h2>Computer Roots <br /> AI-Driven Wings</h2>
          <p>| Passionate <strong>Software Engineer</strong> |</p>
          <p>| Graduate <strong>Computer Science Engineer</strong> |</p>
          <p style={{marginTop: 15, fontWeight: 'bold'}}>Once A New Technology Starts Rolling, If You're Not Part Of The Steamroller,<br /> You're Part Of The Road.</p>
        </div>
        <button
          style={{marginTop: 30}}
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
      </div>

      <div className='hero-img'>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='tech-icon' style={{ marginBottom: '30px' }}>
            <img src='./assets/images/python.png' alt='' />
            </div>
            <div className='tech-icon'>
              <img src='./assets/images/django-icon.png' alt='' />
            </div>
          </div>
          <img src='./assets/images/heroavatar.png' alt='' />
        </div>

        <div>
          <div className='tech-icon'>
            <img src='./assets/images/mysqllogo.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/htmlLogo.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/cssLogo.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

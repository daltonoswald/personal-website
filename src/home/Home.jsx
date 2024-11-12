import { useEffect, useState } from 'react'
import { projectList } from '../projects/projectList'
import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'
import profilePicture from '../assets/dalton-profile-picture.jpg'
import './home.styles.css';

function App() {
  const [greeting, setGreeting] = useState('Hello!')
  useEffect(() => {
    document.title = 'Home | Dalton Oswald'
  }, [])

  useEffect(() => {
    const today = new Date();
    const time = today.getHours();
    if (time > 3 && time < 11) {
      setGreeting('Good Morning!')
    } else if (time > 11 && time < 17) {
      setGreeting('Good Afternoon!')
    } else if (time > 17 || time < 3) {
      setGreeting('Good Evening!')
    }
  }, [])

  return (
    <>
      <Nav />
      <div className='content'>
        <div className='home-header'>
          <img src={profilePicture} className='profile-picture' style={ {height: '250px'} } />
          <div className='home-header-title'>Dalton Oswald</div>
        </div>
        <div className='home-hero'>
          <p>{greeting} My name is Dalton Oswald and welcome to my website! I am a self-taught full stack web developer.</p>
          <p>I began my web development journey in April 2023 following The Odin Project and gained experience in Javascript, React, NodeJS, Mongo, and PostgreSQL to name a few.</p>
          <p>In 2019 I finished my Bachelors of Arts in Communication with a concentration in Radio/TV from California University of Pennsylvania.</p>
          <p><Link to='/projects'>Here</Link> you can find some of my projects, you can find even more on my <a href='https://github.com/daltonoswald'>Github</a></p>
        </div>
      </div>
    </>
  )
}

export default App

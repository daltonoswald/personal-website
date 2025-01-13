import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import profilePicture from '../assets/dalton-profile-picture.jpg'
import github from '../assets/icons/github-original.svg'
import linkedIn from '../assets/icons/linkedin-original.svg'
import lightmodeIcon from '../assets/icons/lightmode.svg'
import darkmodeIcon from '../assets/icons/darkmode.svg'
import './nav.styles.css';

export default function Nav ({ isDark, setIsDark}) {

    const toggleLightDark = () => {
        setIsDark(!isDark);
    }
  
    useEffect(() => {
      document.title = 'Home | Dalton Oswald'
    }, [])

    return (
        <div className={'nav ' + (isDark ? 'darkmode' : 'lightmode')}>
            <div className='nav-link'>
                <Link to='/' className={'nav-link ' + (isDark ? 'darkmode' : 'lightmode')}>Home</Link>
                <Link to='/projects' className={'nav-link ' + (isDark ? 'darkmode' : 'lightmode')}>Projects</Link>
                <Link to='/contact' className={'nav-link ' + (isDark ? 'darkmode' : 'lightmode')}>Contact</Link>
            </div>
            <div className='nav-title'>
                <div className='nav-author'>
                    <img src={profilePicture} className='nav-icon' />
                    <p className='nav-name'>Dalton Oswald</p>
                </div>
                <a href='https://github.com/daltonoswald'><img src={github} className={'nav-icon ' + (isDark ? 'darkmode-icon' : null)} alt='github icon' /></a>
                <a href='https://www.linkedin.com/in/daltonoswald'><img src={linkedIn} className='nav-icon' alt='linkedIn icon' /></a>
                {/* <button onClick={toggleLightDark}>Theme</button> */}
                {(isDark) && (
                    <img className='toggle-mode-button darkmode-icon' src={lightmodeIcon} alt='toggle theme' onClick={toggleLightDark} />
                )}
                {(!isDark) && (
                    <img className='toggle-mode-button lightmode-icon' src={darkmodeIcon} alt='toggle theme' onClick={toggleLightDark} />
                )}
            </div>
        </div>
    )
}
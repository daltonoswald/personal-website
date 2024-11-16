import { useEffect } from "react"
import Nav from "../nav/Nav"
import './contact.styles.css'
import email from "../assets/icons/email-outline.svg"
import location from "../assets/icons/location-home.svg"
import linkedIn from '../assets/icons/linkedin-original.svg'
import github from '../assets/icons/github-original.svg'
import bluesky from '../assets/icons/bluesky.svg'

export default function Contact({ isDark, setIsDark }) {

    useEffect(() => {
        document.title = 'Contact | Dalton Oswald'
      }, [])

    return (
        <>
            <Nav isDark={isDark} setIsDark={setIsDark} />
            <div className={'content ' + (isDark ? 'darkmode' : 'lightmode')}>
                <div className='contact-me'>
                    <h1>Contact me</h1>
                    <div className='contact-container'>
                            <a  className='contact-item' href='mailto:daltonoswald@gmail.com'>
                                <img src={email} className={'contact-icon ' + (isDark ? 'darkmode-icon' : 'lightmode-icon')} />
                                <p className={'contact-name ' + (isDark ? 'darkmode' : '')}>daltonoswald@gmail.com</p>
                            </a>
                        <div className='contact-item'>
                            <img src={location} className={'contact-icon ' + (isDark ? 'darkmode-icon' : 'lightmode-icon')} />
                            <p className={'contact-name ' + (isDark ? 'darkmode' : '')}>Pittsburgh, Pennsylvania</p>
                        </div>
                    </div>
                <div className='link-container'>
                        <a  className='link-item' href='https://www.linkedin.com/in/dalton-oswald-8aa955148'>
                            <img src={linkedIn} className='contact-icon' />
                            <p className={'link-name ' + (isDark ? 'darkmode' : '')}>LinkedIn</p>
                        </a>
                        <a className='link-item' href='https://github.com/daltonoswald'>
                            <img src={github} className={'contact-icon ' + (isDark ? 'darkmode-icon' : '')} />
                            <p className={'link-name ' + (isDark ? 'darkmode' : '')}>Github</p>
                        </a>
                        <a className='link-item' href='https://bsky.app/profile/daltonoswald.bsky.social'>
                            <img src={bluesky} className={'contact-icon ' + (isDark ? 'darkmode-icon' : '')} />
                            <p className={'link-name ' + (isDark ? 'darkmode' : '')}>Bluesky</p>
                        </a>
                </div>
                </div>
            </div>
        </>
    )
}
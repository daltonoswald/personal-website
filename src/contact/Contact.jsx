import { useEffect } from "react"
import Nav from "../nav/Nav"
import './contact.styles.css'
import email from "../assets/icons/email-outline.svg"
import location from "../assets/icons/location-home.svg"
import linkedIn from '../assets/icons/linkedin-original.svg'
import github from '../assets/icons/github-original.svg'

export default function Contact() {

    useEffect(() => {
        document.title = 'Contact | Dalton Oswald'
      }, [])

    return (
        <>
            <Nav />
            <div className='content'>
                <div className='contact-me'>
                    <h1>Contact me</h1>
                    <div className='contact-container'>
                        <div className='contact-item'>
                            <a href='mailto:daltonoswald@gmail.com'>
                                <img src={email} className='contact-icon' />
                                <p className="contact-name">daltonoswald@gmail.com</p>
                            </a>
                        </div>
                        <div className='contact-item'>
                            <img src={location} className='contact-icon' />
                            <p className='contact-name'>Pittsburgh, Pennsylvania</p>
                        </div>
                    </div>
                </div>
                <div className='link-container'>
                    <div className='link-item'>
                        <a href='https://www.linkedin.com/in/dalton-oswald-8aa955148'>
                            <img src={linkedIn} className='contact-icon' />
                            <p className='link-name'>LinkedIn</p>
                        </a>
                    </div>
                    <div className='link-item'>
                        <a href='https://github.com/daltonoswald'>
                            <img src={github} className='contact-icon' />
                            <p className='link-name'>Github</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
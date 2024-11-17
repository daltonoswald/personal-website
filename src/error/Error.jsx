import { useEffect } from "react"
import Nav from "../nav/Nav"
import { Link } from 'react-router-dom'
import './error.styles.css'

export default function Error({ isDark, setIsDark }) {

    useEffect(() => {
        document.title = 'Error | Dalton Oswald'
      }, [])


    return (
        <>
            <Nav isDark={isDark} setIsDark={setIsDark} />
            <div className={'content error-page ' + (isDark ? 'darkmode' : 'lightmode')}>
                <h1 className={'error-title ' + (isDark ? 'darkmode' : '')}>Whoops!</h1>
                <p className={'error-text ' + (isDark ? 'darkmode' : '')}>It looks like whatever you were trying to access does not exist.</p>
                <p className={'error-text ' + (isDark ? 'darkmode' : '')}>You can return <Link to='/'>Home</Link> or check out my <Link to='/projects'>Projects</Link>.</p>
            </div>
        </>
    )
}
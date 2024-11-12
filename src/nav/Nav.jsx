import { Link } from "react-router-dom"

export default function Nav () {

    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}
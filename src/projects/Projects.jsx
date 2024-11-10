import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectsContainer from './ProjectsContainer'

function Projects() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      document.title = 'Projects | Dalton Oswald'
    }, [])
  
    return (
      <>
      <Link to='/'>Home</Link>
      <ProjectsContainer />
      </>
    )
  }
  
  export default Projects
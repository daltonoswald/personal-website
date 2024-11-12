import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectsContainer from './ProjectsContainer'
import Nav from '../nav/Nav'

function Projects() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      document.title = 'Projects | Dalton Oswald'
    }, [])
  
    return (
      <>
      <Nav />
      <ProjectsContainer />
      </>
    )
  }
  
  export default Projects
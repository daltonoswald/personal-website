import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectList } from '../projects/projectList'
import odinProjectIcon from '../assets/the-odin-project.svg';
import './projects.styles.css'

function Projects() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      document.title = 'Projects | Dalton Oswald'
    }, [])
  
    return (
      <>
      <Link to='/'>Home</Link>
        {projectList.map(project =>(
          <div key={project.name} className='project'>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            {(project.odinProjectUrl) && (
                // <a href={project.odinProjectUrl}>The Odin Project</a>
                <a href={project.odinProjectUrl}>
                    <img src={odinProjectIcon} href={project.odinProjectUrl} />
                </a>
            )}
            {project.libraries.map((library) => (
              <div className='library' key={project.name}>
                <p>{library.name}</p>
                <img src={library.icon} />
              </div>
            ))}
          </div>
        ))}
      </>
    )
  }
  
  export default Projects
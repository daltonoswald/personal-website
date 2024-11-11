import { projectList } from '../projects/projectList'
import odinProjectIcon from '../assets/the-odin-project.svg';
import './projectsContainer.styles.css'

export default function ProjectsContainer() {
    
    return (
        <div className='projects-container'>
        {projectList.map(project =>(
          <div key={project.name} className='project'>
            <div className='project-header'>
                <h1 className='project-title'>{project.name}</h1>
                {(project.odinProjectUrl) && (
                    <a href={project.odinProjectUrl}>
                        <img className='odin-project-icon' src={odinProjectIcon} href={project.odinProjectUrl} />
                    </a>
                )}
            </div>
            <a href={project.liveUrl} target="_blank">
                <img className='project-image' src={project.screenshot} />
            </a>
            <p>{project.description}</p>
            <div className='library-container'>
                {project.libraries.map((library) => (
                <div className='library' key={project.name}>
                    <img className='library-icon' src={library.icon} alt={library.name} />
                    {/* <p className='library-name'>{library.name}</p> */}
                </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    )
}
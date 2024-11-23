import odinProjectIcon from '../assets/icons/the-odin-project.svg';
import github from '../assets/icons/github-original.svg'
import './projectsContainer.styles.css'

export default function ProjectsContainer({shownProjects, isDark}) {
    
    return (
        <div className='projects-container'>
        {shownProjects.map(project =>(
          <div key={project.name} className={'project ' + (isDark ? 'project-darkmode' : '')}>
            <div className='project-header'>
                <a href={project.liveUrl} target="_blank" className={'project-link ' + (isDark ? 'darkmode' : '')}>
                    <h1 className='project-title'>{project.name}</h1>
                </a>
                <div className='project-links'>
                    {(project.odinProjectUrl) && (
                        <a href={project.odinProjectUrl}>
                            <img className='odin-project-icon' src={odinProjectIcon} href={project.odinProjectUrl} />
                        </a>
                    )}
                    <a href={project.githubUrl}><img src={github} className={'project-github-icon ' + (isDark ? 'darkmode-icon' : '')} alt='github icon' /></a>
                </div>
            </div>
            <a href={project.liveUrl} target="_blank">
                <img className='project-image' src={project.screenshot} />
            </a>
            <p className='project-description'>{project.description}</p>
            <div className='library-container'>
                {project.libraries.map((library) => (
                <div className='library' key={library.name}>
                    <img className={'library-icon ' + (isDark ? library.name : '')} src={library.icon} alt={library.name} />
                    {/* <p className='library-name'>{library.name}</p> */}
                </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    )
}
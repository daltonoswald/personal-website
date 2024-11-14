import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectsContainer from './ProjectsContainer'
import Nav from '../nav/Nav'
import { projectList } from '../projects/projectList'
import './projects.styles.css'

import react from '../assets/icons/react-original-wordmark.svg';
import nodeJS from '../assets/icons/nodejs-original.svg'
import express from '../assets/icons/express-original.svg'
import postgreSQL from '../assets/icons/postgresql-original-wordmark.svg'
import prisma from '../assets/icons/prisma.svg'
import mongo from '../assets/icons/mongodb-plain-wordmark.svg'


function Projects({ isDark, setIsDark }) {
  const [currentFilter, setCurrentFilter] = useState('');
  const [shownProjects, setShownProjects] = useState(projectList)
  useEffect(() => {
    document.title = 'Projects | Dalton Oswald'
  }, [])

  const handleFilter = (e) => {
    if (currentFilter === e.target.id) {
      setShownProjects(projectList)
      setCurrentFilter('')
    } else {
      setCurrentFilter(e.target.id);
      setShownProjects(projectList.filter(project => project.tags.includes(e.target.id)))
    }
  }

  return (
    <>
    <Nav isDark={isDark} setIsDark={setIsDark} />
    <div className={'content ' + (isDark ? 'darkmode' : 'lightmode')}>
      <div className='filter-container'>
        <img src={react} onClick={handleFilter} id='React' className='filter-icon' />
        <img src={nodeJS} onClick={handleFilter} id='NodeJS' className='filter-icon' />
        <img src={express} onClick={handleFilter} id='Express' className={'filter-icon ' + (isDark ? 'darkmode-icon' : null)} />
        <img src={postgreSQL} onClick={handleFilter} id='PostgreSQL' className='filter-icon' />
        <img src={prisma} onClick={handleFilter} id='Prisma' className={'filter-icon ' + (isDark ? 'darkmode-icon' : null)} />
        <img src={mongo} onClick={handleFilter} id='MongoDB' className='filter-icon' />
      </div>
      <ProjectsContainer shownProjects={shownProjects} isDark={isDark} />
    </div>
    </>
  )
}
  
export default Projects
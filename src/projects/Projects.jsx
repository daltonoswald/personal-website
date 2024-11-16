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
      <div className={'filter-container ' + (isDark ? 'darkmode' : 'lightmode')}>
        <div onClick={handleFilter} id='React' className={'filter-icon-container ' + (isDark ? 'darkmode-icon-container ' : '') + ((currentFilter === 'React') ? 'toggled' : '')}>
          <img src={react} onClick={handleFilter} id='React' className={'filter-icon ' + (isDark ? 'darkmode-filter-icon ' : '')} />
        </div>
        <div onClick={handleFilter} id='NodeJS' className={'filter-icon-container ' + (isDark ? 'darkmode-icon-container ' : '') + ((currentFilter === 'NodeJS') ? 'toggled' : '')}>
          <img src={nodeJS} onClick={handleFilter} id='NodeJS' className={'filter-icon ' + (isDark ? 'darkmode-filter-icon ' : '')} />
        </div>
        <div onClick={handleFilter} id='Express' className={'filter-icon-container ' + (isDark ? 'darkmode-icon-container ' : '') + ((currentFilter === 'Express') ? 'toggled' : '')}>
          <img src={express} onClick={handleFilter} id='Express' className={'filter-icon ' + (isDark ? 'darkmode-icon ' : '')} />
        </div>
        <div onClick={handleFilter} id='PostgreSQL' className={'filter-icon-container ' + (isDark ? 'darkmode-icon-container ' : '') + ((currentFilter === 'PostgreSQL') ? 'toggled' : '')}>
          <img src={postgreSQL} onClick={handleFilter} id='PostgreSQL' className={'filter-icon ' + (isDark ? 'darkmode-filter-icon ' : '')} />
        </div>
        <div onClick={handleFilter} id='Prisma' className={'filter-icon-container ' + (isDark ? 'darkmode-icon-container ' : '') + ((currentFilter === 'Prisma') ? 'toggled' : '')}>
          <img src={prisma} onClick={handleFilter} id='Prisma' className={'filter-icon ' + (isDark ? 'darkmode-icon ' : '')} />
        </div>
        <div onClick={handleFilter} id='MongoDB' className={'filter-icon-container ' + (isDark ? 'darkmode-icon-container ' : '') + ((currentFilter === 'MongoDB') ? 'toggled' : '')}>
          <img src={mongo} onClick={handleFilter} id='MongoDB' className={'filter-icon ' + (isDark ? 'darkmode-filter-icon ' : '')} />
        </div>
      </div>
      <ProjectsContainer shownProjects={shownProjects} isDark={isDark} />
    </div>
    </>
  )
}
  
export default Projects
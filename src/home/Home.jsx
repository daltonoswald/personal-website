import { useEffect, useState } from 'react'
import { projectList } from '../projects/projectList'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = 'Home | Dalton Oswald'
  }, [])

  return (
    <>
      <Link to='/projects'>Projects</Link>
    </>
  )
}

export default App

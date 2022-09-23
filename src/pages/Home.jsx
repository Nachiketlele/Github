import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import GitProfile from './GitProfile'


const Home = () => {
  const [value,setValue] = useState("")
  const [page, setPage] = useState(1)
  return (
      <div>
       <Navbar page={page} value={value} setValue={setValue}/>
       <GitProfile setPage={setPage} page={page} value={value} setValue={setValue}/>
      </div>
  )
}

export default Home
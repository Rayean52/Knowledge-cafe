import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/blogs'
import Navbar from './Components/Navbar/Navbar'
import State from './Components/State/State'


function App() {

  const [bookMark, setBookMark] = useState([])

  const handleBookMark = (blog) => {
    setBookMark([...bookMark, blog])
  }

  return (
    <>
      <Navbar></Navbar>

      <div className='flex w-[90%] justify-around' >
        <div className='blogs-container text-center' >
          <Blogs handleBookMark={handleBookMark} ></Blogs>
        </div>
        <div className='state-container bg-slate-400 text-center px-5' >
          State Management
          {
            bookMark.map((mark)=> <State mark= {mark} ></State>)
          }
        </div>
      </div>
    </>
  )
}

export default App

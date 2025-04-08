import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/blogs'
import Navbar from './Components/Navbar/Navbar'
import State from './Components/State/State'


function App() {

  const [bookMark, setBookMark] = useState([]);
  const [timeCount, setTimeCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookMark([...bookMark, blog])
  }

  const handleMarkAsRead = (time, id) => {
    const newCount = timeCount + time;
    setTimeCount(newCount);
    handleRemoveBookMark(id)

  }

  const handleRemoveBookMark = (id) =>{
    const remainingBookMark = bookMark.filter((mark)=> mark.id!==id);
    setBookMark(remainingBookMark)
  }

  return (
    <>
      <Navbar></Navbar>

      <div className='flex w-[90%] justify-around' >
        <div className='blogs-container text-center' >
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className='state-container bg-slate-400 text-center px-5' >
          <p>Total reading time : {timeCount} </p>
          <p>Total BookMark : {bookMark.length} </p>
          {
            bookMark.map((mark) => <State key={mark.id} mark={mark} ></State>)
          }
        </div>
      </div>
    </>
  )
}

export default App

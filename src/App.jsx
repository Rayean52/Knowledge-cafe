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

      <div className='flex w-8/12 mx-auto'>
        <div className=' text-center mt-6' >
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className=' w-[385px] text-center px-5 mt-6 mx-5 rounded-xl' >
          <div className='bg-slate-700 text-white rounded-t-xl py-2'>
            <p>Total reading time : {timeCount} </p>
            <p>Total BookMark : {bookMark.length} </p>
          </div>
          {
            bookMark.map((mark) => <State key={mark.id} mark={mark} ></State>)
          }
        </div>
      </div>
    </>
  )
}

export default App

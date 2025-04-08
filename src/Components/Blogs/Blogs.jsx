import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json").then(res => res.json()).then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h1>Total : {blogs.length} </h1>
            <div className='grid grid-cols-2 gap-5 mx-auto' >
                {
                    blogs.map((blog) => <Blog
                        key={blog.id}
                        handleBookMark={handleBookMark}
                        handleMarkAsRead={handleMarkAsRead}
                        blog={blog} ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;
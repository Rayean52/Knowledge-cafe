import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json").then(res => res.json()).then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div>
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
import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
    const { title, cover_photo, author_img, author, hashtags, reading_time } = blog;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover_photo}
                        alt="Shoes" />
                </figure>
                <div className='flex justify-around items-center' >
                    <div className='flex items-center gap-1' ><img className='w-16' src={author_img} ></img>
                        <h1>{author}</h1></div>
                    <button onClick={() => handleBookMark(blog)}><FaBookmark size={30} /></button>
                </div>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <p>Reading time : {reading_time} </p>

                    <div className='flex'>
                        {hashtags.map((item => <p>{item}</p>))}
                    </div>

                    <div className="card-actions justify-end">
                        <button onClick={()=>handleMarkAsRead(reading_time)} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
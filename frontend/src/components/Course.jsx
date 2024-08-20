import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from "axios";
import { Link } from 'react-router-dom';

function Course() {
  const[book,setBook]=useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[]);
  return (<>

    <div className="max-w-screen-5xl container mx-auto md:px-20 px-4 ">
      <div className='mt-28 items-center justify-center text-center '>
        <h1 className='text-2xl md:text-4xl text-black dark:text-white'>
          We're Delighted to have your <span className='text-pink-400'>here!</span>
        </h1>

        <p className=' mt-12 text-black dark:text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          rerum quo tenetur nostrum cupiditate eum odit eligendi? Totam natus
          explicabo impedit amet maiores quibusdam? Magni dolorum ullam rem enim rerum.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur quis 
          dignissimos consequatur eius alias recusandae nesciunt fugit, molestias libero 
          dolorem dolor soluta maiores, necessitatibus optio accusantium. Sed, molestias id!
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Home</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item) => (
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>

  </>
  );
}

export default Course;

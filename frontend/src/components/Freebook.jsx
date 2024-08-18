import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className="pt-0"> {/* Added pt-0 to remove any unintended top padding */}
        <br />
        <br />
          <h1 className='text-black text-xl font-bold mb-0 dark:text-white'>Free Books</h1>
          <p className='text-black dark:text-white'>
            Explore a world of captivating reads with our handpicked selection of free books. Dive into stories and knowledge without spending a penny—because the joy of reading should be limitless.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item)=> (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;

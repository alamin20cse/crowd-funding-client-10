import React from 'react';

import slid1 from '../assets/slide1.jpg';
import slid2 from '../assets/slide2.jpg';
import slid3 from '../assets/slide3.jpg';
import slid4 from '../assets/slide4.jpg';


const Bannar = () => {
    return (
        <div className="carousel w-full h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slid1}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>



        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slid2}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slid3}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>



        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slid4}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>


      </div>
    );
};

export default Bannar;
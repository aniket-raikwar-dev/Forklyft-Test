/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { CarouselWrapper, prev, next } from 'react-pretty-carousel';
import './Faq.css'
import Photo1 from '../images/photo-1.jpg';
import Photo2 from '../images/photo-2.jpg';
import Photo3 from '../images/photo-3.jpg';
import Left from '../images/left.png';
import Right from '../images/right.png';

const PrettyCarousal = () => {

  return (
    <div style={{marginTop: '50px'}}>
      <CarouselWrapper items={3} mode="gallery" showControls={false}>
        <img className="img" src={Photo1} alt="image" />
        <img className="img" src={Photo2} alt="image" />
        <img className="img" src={Photo3} alt="image" />
        <img className="img" src={Photo2} alt="image" />
        <img className="img" src={Photo1} alt="image" />
      </CarouselWrapper>
      <div className="carousal-btn">
        <div className="arrow" onClick={() => {prev()}}>
          <img src={Left} alt="left" />
        </div>
        <div className="arrow" onClick={() => {next()}}>
          <img src={Right} alt="right" />
        </div>
      </div>
    </div>
  )
}

export default PrettyCarousal
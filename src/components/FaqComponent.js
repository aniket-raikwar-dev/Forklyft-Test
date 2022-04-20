import React, {useState} from 'react';
import Vector from '../images/Vector.png';
import './Faq.css'

const FaqComponent = ({data}) => {

  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  }

  return (
    <div>
      <div onClick={changeOpen} className="faq-div">
        <h3 className="head">{data}</h3>
        <img className="dropdown" src={Vector} alt="arrow" />
      </div>
      {
        open && <div>
          <p className="para">Hello Dear</p>
        </div>
      }
      <div className="line"></div>
    </div>
  )
}

export default FaqComponent
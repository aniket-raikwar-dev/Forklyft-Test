import React from 'react';
import FaqComponent from './FaqComponent';
import './Faq.css';



const FAQ = () => {
  return (
    <div className="container">
     <h2 className="faq-head">FAQs</h2>
     <FaqComponent data="How will HomeLane Pranto Painting Service go about your home?" />
     <FaqComponent data="How can one register for HomeLane Pronto Painting Service?" />
     <FaqComponent data="After the painting work is over, will HomeLane Pranto Painting Service clean up my house?" />
     <FaqComponent data="What are the tools used during painting and how will those benefit me?" />
     <FaqComponent data="What are the features of Asian Paints Safe Painting Service?" />
     <FaqComponent data="What are the benefits of Asian Paints Safe Painting Service?" />
    </div>
  )
}


export default FAQ;
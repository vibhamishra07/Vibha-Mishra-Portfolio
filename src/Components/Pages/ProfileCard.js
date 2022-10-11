import React from 'react'
import './ProCard.css';


export default function ProfileCard ({pName, pdetail, purl}) {
  return (
    <div className="pro-card" data-aos="fade-up">
      <div className='site-name'>{"<"}{pName}{">"}</div>
      <div className='pdetails'>{pdetail}</div>
      <button className='explore-url'><a href={purl} target='_blank' rel="noreferrer">Explore {"->"}</a></button>
    </div>
  );
}

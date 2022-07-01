import { useParams } from "react-router-dom";
import "./stays.css";
import { getStay } from "../data";
import React from "react";

export default function Stay() {
  let params = useParams();
  let stay = getStay(params.stayId);
  return stay ? (
    <div className="app">
      <header className="app-header">
        <h1>London Hotels</h1>
        <a href= 'home' >back to Home page</a>
        
      </header>
      <img className="stay-img" alt={stay.name} src={stay.img} />
      <h2>{stay.name}</h2>
      <p className="stay-description">{stay.description}</p>
      <h3>Activities</h3>
      <p className='activities'>{stay.activity}</p>
      <h3>Services</h3>
      <p className='services'>{stay.services}</p>
      <h3>{'Star Rating'}</h3>
      <p className="ranking">{stay.ranking}</p>
      <h3>{'Reviews'}</h3>
      <p className="review1">{stay.reviews1}</p>
      <p className="review2">{stay.reviews2}</p>
    
      
    </div>
  ) : (
    <></>
  );
}

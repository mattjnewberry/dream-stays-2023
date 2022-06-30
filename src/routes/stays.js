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
      </header>
      <h2>Swag London Hotels for Swag Londoners</h2>
      <img className="stay-img" alt={stay.name} src={stay.img} />
      <h2>{stay.name}</h2>
      <p className="stay-description">{stay.description}</p>
      <h3>Activites</h3>
      <p className='activities'>{stay.activity}</p>
      <h3>{'Star Rating:'}</h3>
      <p className="ranking">{stay.ranking}</p>
      
    </div>
  ) : (
    <></>
  );
}

import React from 'react';
import countries from "../../assets/countries.png";

const Countries = () => {
  return (
    <div className="mt-3 d-flex flex-column align-items-center">
      <a href="https://github.com/EdilBiktimirov/homework-61.git">GitHub link for Countries App</a>
      <img className="w-75 mt-3" src={countries} alt="#"/>
    </div>
  );
};

export default Countries;
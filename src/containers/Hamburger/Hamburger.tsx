import React from 'react';
import hamburger from  "../../assets/humburger.png";

const Hamburger = () => {
  return (
    <div className="mt-3 d-flex flex-column align-items-center">
      <a href="https://github.com/EdilBiktimirov/homework-56.git">GitHub link for Hamburger App</a>
      <img className="w-75 mt-3" src={hamburger} alt="#"/>
    </div>
  );
};

export default Hamburger;
import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="mt-4 justify-content-between p-3 text-center">
      <Link to="game" className="btn btn-warning w-25 ">Game</Link>
      <Link to="hamburger" className="btn btn-warning w-25 mx-3">Hamburger</Link>
      <Link to="countries" className="btn btn-warning w-25">Countries</Link>
      <Outlet/>
    </div>
  );
};

export default Portfolio;
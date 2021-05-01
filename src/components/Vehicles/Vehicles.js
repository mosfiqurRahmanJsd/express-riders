import React from "react";
import { Link } from "react-router-dom";
import './Vehicles.css'


const Vehicles = (props) => {
  
  const { name, img, id } = props.vehicle; 

  return (
    <div className="col-12 col-sm-6 col-md-3 mb-3">
      <Link to={"/destination/"+name} className="link">
        <div className="bg-light p-5 radius" >
          <img className="img-fluid" src={img} alt="" />
          <h3 className="pt-4 text-center "> {name} </h3>
        </div>
      </Link>
    </div>
  );
};

export default Vehicles;

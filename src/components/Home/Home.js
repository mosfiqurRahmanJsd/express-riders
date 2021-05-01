import React from "react";
import fakeData from "../../fakeData/fakeData.json";
import { useState } from "react";
import "./Home.css";
import Vehicles from "../Vehicles/Vehicles";
import Header from '../Header/Header'

const Home = () => {
  const [vehicles, setVehicles] = useState(fakeData);

  return (
    <div className="bg-img">
      <Header></Header>
      <div className="container">
        <div className="row vehicles d-flex align-items-center">
            {
                vehicles.map(vehicle => <Vehicles vehicle={vehicle} key={vehicle.id} ></Vehicles> )
            }
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, {  } from "react";
import Header from "../Header/Header";

const AreaDescription = () => {


  return (
    <div className="container">
            <Header></Header>
            <hr/>
            <div className="row destination">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="area p-4">
                        <h3>From: </h3>
                        <h3>To:</h3>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.623580876025!2d90.32726106707945!3d23.8105444238919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1619047447937!5m2!1sen!2sbd" loading="lazy" ></iframe>
                </div>
            </div>
        </div>
  );
};

export default AreaDescription;

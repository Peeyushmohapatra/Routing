import React from "react";
import "./home.css";
import Banner from "../../Image/banner.png"

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="h3">
          <p>Leading MEP & Facility</p>
          <p>management company </p>
          <p>in Dubai</p>
        </div>
        <div className="para">
          <p>
            Urban Science is always ready to accept your challenges Meeting your
            goals is our main objective. Professional services for facility
            management & MEP works.
          </p>
        </div>
        <div className="buttons">
          <button className="profile">Company Profile</button>
          <button className="video"> <i class="fa-solid fa-circle-play"></i>  Watch Videos</button>
        </div>
      </div>
      <div className="right">
        <img
          src={Banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

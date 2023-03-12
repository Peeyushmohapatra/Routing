import React from "react";
import "./service.css";
import Image from "../../Image/service.jpg";

const Service = () => {
  return (
    <div className="service">
      <div className="imgCon">
        <img src={Image} alt="" />
      </div>
      <div className="contentContainer">
        <h1>MEP Building Services</h1>
        <p>
          URBAN SCIENCE is one of the leading MEP companies in Dubai, in
          electrical, mechanical, instrumentation, and building services within
          Dubai. We help our customers with integrated engineering solutions
          that are comprised of design, procurement, project management,
          commissioning, and facilities management especially done according to
          the client's requirements. We employ the best engineers, offer the
          best technology, and use the most efficient processes that guarantee a
          successful project. We'll meet with you before a project starts to
          discuss any custom needs, and provide a handover when it's done so
          you're fully satisfied.
        </p>
      </div>
    </div>
  );
};

export default Service;

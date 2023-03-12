import React from "react";
import "./blog.css";
import Icon from "../../Image/iconC.webp";

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog.</h1>
      <div className="pContainer">
        <p>Looking for a MEP</p>
        <p>Contractor in Dubai?</p>
      </div>
      <div className="iconContainer">
        <img src={Icon} alt="" />

        <p>Urban Science</p>
      </div>
    </div>
  );
};

export default Blog;

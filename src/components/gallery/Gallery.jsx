import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="container2" id="Gallery">
        <div className="left-text">
          <h2 className="heading">My College Lyf</h2>
          <p className="subheading">
            When words become unclear, I shall focus with photographs. When
            images become inadequate, I shall be content with silence.
          </p>
        </div>
        <div className="gallery">
          <div
            className="box rowi-2 rowi-2-a"
            id="box-1"
          >
            IMG1
          </div>
          <div
            className="box coli-2"
            id="box-2"
          >
            IMG2
          </div>
          <div
            className="box"
            id="box-3"
          >
            IMG3
          </div>
          <div
            className="box rowi-2"
            id="box-4"
          >
            IMG4
          </div>
          <div
            className="box coli-2"
            id="box-5"
          >
            IMG5
          </div>
          <div
            className="box"
            id="box-6"
          >
            IMG6
          </div>
          <div
            className="box coli-2"
            id="box-7"
          >
            IMG7
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

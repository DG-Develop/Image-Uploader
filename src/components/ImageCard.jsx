import React from "react";

import './style/ImageCard.scss'
import image from '../assets/static/image.svg'

const ImageCard = () => (
  <section className="ImageCard">
    <div className="ImageCard__Header">
      <h1 className="ImageCard__Header--title">Upload your image</h1>
      <span className="ImageCard__Header--description">File should be Jpeg, Png,...</span>
    </div>
    <div className="ImageCard__Container"> 
        <img className="ImageCard__Container--img" src={image} alt=""/>
        <input className="ImageCard__Container--drop" type="file" name="myFile"/>
        <span className="ImageCard__Container--description">Drag & Drop your image here</span>
    </div>
    <div className="ImageCard__Footer">
        <span className="ImageCard__Footer--text">Or</span>
        <button className="ImageCard__Footer--btn">Choose a file</button>
    </div>
  </section>
);

export default ImageCard;

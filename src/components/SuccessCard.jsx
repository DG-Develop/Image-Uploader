import React from "react";

import checked from '../assets/static/checked.svg'
import camera from '../assets/static/camera.jpg'
import './style/SuccessCard.scss'

const SuccessCard = () => (
  <section className="SuccessCard">
    <div className="SuccessCard__Header">
      <img className="SuccessCard__Header--icon" src={checked} alt=""/>
      <span className="SuccessCard__Header--description">
        Uploaded Successfully!
      </span>
    </div>
    <div className="SuccessCard__Container"> 
        <img className="SuccessCard__Container--img" src={camera} alt=""/>
    </div>

    <div className="SuccessCard__Footer">
        <input className="SuccessCard__Footer--link" type="text"/>
        <button className="SuccessCard__Footer--btn">Copy Link</button>
    </div>
  </section>
);

export default SuccessCard;

import React, { useRef } from "react";

import './style/ImageCard.scss'
import image from '../assets/static/image.svg'

const ImageCard = ({ onDrop }) => {
  let buttonFile = useRef()
  let dropRegion = useRef()

  const handleClick = () => {
    buttonFile.current.click()
  }

  const preventDefault = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    // Para que no se recargue y abra otra pestaña
    preventDefault(e)
    onDrop(e)
  }

  return (
    <section className="ImageCard">
      <div className="ImageCard__Header">
        <h1 className="ImageCard__Header--title">Upload your image</h1>
        <span className="ImageCard__Header--description">File should be Jpeg, Png,...</span>
      </div>
      <div
        className="ImageCard__Container"
        onClick={handleClick}
        onDragEnter={preventDefault}
        onDragLeave={preventDefault}
        onDragOver={preventDefault}
        onDrop={handleDrop}
        ref={dropRegion}>
        <img className="ImageCard__Container--img" src={image} alt="" />
        <input
          className="ImageCard__Container--drop"
          type="file"
          ref={buttonFile}
          name="myFile"
          accept="image/png, image/jpeg" />
        <span className="ImageCard__Container--description">Drag & Drop your image here</span>
      </div>
      <div className="ImageCard__Footer">
        <span className="ImageCard__Footer--text">Or</span>
        <button className="ImageCard__Footer--btn" onClick={handleClick}>Choose a file</button>
      </div>
    </section>
  );
}

export default ImageCard;

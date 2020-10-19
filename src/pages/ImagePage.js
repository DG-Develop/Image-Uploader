import React, { Component, Fragment } from 'react';
import ImageCard from '../components/ImageCard';
import SuccessCard from '../components/SuccessCard';
import Uploading from '../components/Uploading';

class ImagePage extends Component {

  handleDrop = e => {
    const data = e.dataTransfer
    const file = data.files

    this.handleFiles(file)
  }

  handleFiles = file => {
    /* for (var i = 0, len = files.length; i < len; i++) {
        if (validateImage(files[i]))
            previewAnduploadImage(files[i]);
    } */
    console.log(file)
  }

  render() {
    return (
        <ImageCard onDrop={this.handleDrop}/>
    );
  }
}

export default ImagePage;

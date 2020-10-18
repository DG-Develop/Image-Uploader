import React, { Component, Fragment } from 'react';
import ImageCard from '../components/ImageCard';
import SuccessCard from '../components/SuccessCard';
import Uploading from '../components/Uploading';

class ImagePage extends Component {
  render() {
    return (
      <Fragment>
        <ImageCard />
        <Uploading />
        <SuccessCard />
      </Fragment>
    );
  }
}

export default ImagePage;

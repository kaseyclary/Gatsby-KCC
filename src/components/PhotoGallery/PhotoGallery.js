import React, { Component } from 'react'
import "../PhotoGallery/PhotoGallery.css"
import gal1 from '../../assets/images/gal1.webp'
import gal2 from '../../assets/images/gal2.png'
import gal3 from '../../assets/images/gal3.webp'
import gal4 from '../../assets/images/gal4.webp'
import gal5 from '../../assets/images/gal5.webp'
import gal6 from '../../assets/images/gal6.webp'

import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: gal1,
  },
  {
    original: gal2,
  },
  {
    original: gal3,
  },
  {
    original: gal4,
  },
  {
    original: gal5,
  },
  {
    original: gal6,
  }
];
 
class PhotoGallery extends Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default PhotoGallery;

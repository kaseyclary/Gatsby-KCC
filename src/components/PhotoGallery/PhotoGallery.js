import React, { Component } from 'react'
import "../PhotoGallery/PhotoGallery.css"
import gal1 from '../../assets/images/gal1.webp'
import gal2 from '../../assets/images/gal2.png'
import gal3 from '../../assets/images/cup.webp'
import gal4 from '../../assets/images/IMG_8929.webp'
import gal5 from '../../assets/images/IMG_8930.webp'
import gal6 from '../../assets/images/gal6.webp'
import gal8 from '../../assets/images/gal8.webp'
import gal9 from '../../assets/images/gal9.webp'
import gal10 from '../../assets/images/gal10.webp'

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
  },
  {
    original: gal8,
  },
  {
    original: gal9,
  },
  {
    original: gal10,
  },
  
];
 
class PhotoGallery extends Component {
  render() {
    return <ImageGallery items={images} className={ImageGallery}/>;
  }
}

export default PhotoGallery;

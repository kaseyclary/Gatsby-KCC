import React from 'react'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery'
import classes from '../pages/Gallery.module.css'
import Layout from '../containers/Layout/Layout'

const Gallery = () => {
    //Need to make this accessible through Contentful
    return(
        <Layout>
            <div className={classes.Gallery}>
                <PhotoGallery/>
            </div>
        </Layout>
    )
}

export default Gallery;
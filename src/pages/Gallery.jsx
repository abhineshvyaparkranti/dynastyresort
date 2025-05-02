import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import GalleryFive from '../components/gallery/GalleryFive'
import VideoThree from '../components/videos/VideoThree'
import FooterOne from '../components/footer/FooterOne'
import GalleryFour from '../components/gallery/GalleryFour'
import GalleryThree from '../components/gallery/GalleryThree'
import GalleryTwo from '../components/gallery/GalleryTwo'
import GalleryOne from '../components/gallery/GalleryOne'

function Gallery() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne 
            title="Gallery" 
            description="where every image tells a story of luxury, comfort, and unparalleled hospitality"
        />
        <GalleryTwo />
        <VideoThree />
        <FooterOne />
    </div>
  )
}

export default Gallery
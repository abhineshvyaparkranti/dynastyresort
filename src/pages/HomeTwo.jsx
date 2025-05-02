import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BannerTwo from '../components/banner/BannerTwo'
import AdvanceForm from '../components/form/AdvanceForm'
import AboutTwo from '../components/about/AboutTwo'
import FacilitiesTwo from '../components/facilities/FacilitiesTwo'
import RoomTwo from '../components/room/RoomTwo'
import TestimonialTwo from '../components/testimonials/TestimonialTwo'
import VideoTwo from '../components/videos/VideoTwo'
import OfferTwo from '../components/offer/OfferTwo'
import GalleryTwo from '../components/gallery/GalleryTwo'
import FooterOne from '../components/footer/FooterOne'
// import posts from '../components/data/data-room.json'
import HomeRoom from '../components/room-details/HomeRoom'
 
 
 

function HomeTwo() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BannerTwo />
        <AdvanceForm />
        <AboutTwo />
        <FacilitiesTwo />
        {/* <RoomTwo posts={posts}/> */}
        <HomeRoom />
         
        
        <TestimonialTwo />
        <VideoTwo />
        <OfferTwo />
        <GalleryTwo limit={8} />
        <FooterOne />
    </div>
  )
}

export default HomeTwo
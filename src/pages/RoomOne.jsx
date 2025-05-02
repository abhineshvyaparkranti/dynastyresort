import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import AdvanceFormTwo from '../components/form/AdvanceFormTwo'
import RoomSix from '../components/room/RoomSix'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'

function RoomOne() {
    return (
        <div>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title="Deluxe Room"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <AdvanceFormTwo />
            <RoomSix />
            <TestimonialOne />
            <FooterOne />
        </div>
    )
}

export default RoomOne
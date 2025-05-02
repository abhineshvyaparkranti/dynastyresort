import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ServiceFive from '../components/service/ServiceFive'
import ServiceOne from '../components/service/ServiceOne'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import TestimonialFive from '../components/testimonials/TestimonialFive'

function Service() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne 
            title="Our Service" 
            description="At Moonlit we pride ourselves on delivering an exceptional experience."
        />
        <ServiceFive />
        <ServiceOne />
        <TestimonialFive />
        <FooterOne />
    </div>
  )
}

export default Service
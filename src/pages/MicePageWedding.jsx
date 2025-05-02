import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import FooterOne from '../components/footer/FooterOne'
import MiceDetails from '../components/mice/MiceDetails'
import EventTwo from '../components/event/EventTwo'
import EventTwoWedding from '../components/event/EventTwoWedding'

function MicePageWedding() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne 
            title="Our Service" 
            description="At Moonlit we pride ourselves on delivering an exceptional experience."
        />
       
       {/* <MiceDetails /> */}
       <EventTwoWedding />
         
        <FooterOne />
    </div>
  )
}

export default MicePageWedding;
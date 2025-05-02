import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import FooterOne from '../components/footer/FooterOne'
import MiceDetails from '../components/mice/MiceDetails'
import EventTwo from '../components/event/EventTwo'
import EventTwoBusiness from '../components/event/EventTwoBusiness'

function MicePageBusiness() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne 
            title="Our Service" 
            description="At Moonlit we pride ourselves on delivering an exceptional experience."
        />
       
       {/* <MiceDetails /> */}
       <EventTwoBusiness />
         
        <FooterOne />
    </div>
  )
}

export default MicePageBusiness;
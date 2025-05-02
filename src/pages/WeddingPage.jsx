import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
// import ContactOne from '../components/contact/ContactOne'
import Wedding from '../components/weddingpart/Wedding'
import FooterOne from '../components/footer/FooterOne'
 
 
 
 
 

function WeddingPage() {

    
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne 
            title="Wedding Experience" 
            description="Whether you have questions, need assistance, or simply want to share."
        />
        {/* <ContactOne /> */}
        <Wedding />
        <FooterOne />
    </div>
  )
}

export default WeddingPage
import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ActivitiesOne from '../components/activities/ActivitiesOne'
import FooterOne from '../components/footer/FooterOne'

function Activities() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne
            title="Activities" 
            description="Our diverse range of activities is designed to offer something for everyone."
        />
        <ActivitiesOne />
        <FooterOne />
    </div>
  )
}

export default Activities
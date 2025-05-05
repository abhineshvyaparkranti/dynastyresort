import React from 'react'
import Refund from '../components/footer/Refund'
 
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import FooterOne from '../components/footer/FooterOne'

const RefundPolicy = () => {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne 
            title="Refund Policy " 
            description="Whether you have questions, need assistance, or simply want to share."
        />
      <Refund />
    <FooterOne />

    </div>
  )
}

export default RefundPolicy

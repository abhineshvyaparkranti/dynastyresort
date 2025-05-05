import React from 'react'
import TermsCondition from '../components/footer/TermsCondition'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import FooterOne from '../components/footer/FooterOne'


const TermsConditionPage = () => {
  return (
    <div>
      <TopBar />
        <HeaderOne />
        <BreadcrumbOne 
            title="Terms & Conditions " 
            description="Whether you have questions, need assistance, or simply want to share."
        />
      <TermsCondition />
         <FooterOne />
    </div>
  )
}

export default TermsConditionPage

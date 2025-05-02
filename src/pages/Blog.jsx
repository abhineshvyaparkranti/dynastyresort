import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import BlogThree from '../components/blog/BlogThree'
import FooterOne from '../components/footer/FooterOne'

function Blog() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbOne
            title="Our Blog" 
            description="Discover The blog where luxury, comfort, and adventure come together."
        />
        <BlogThree />
        <FooterOne />

    </div>
  )
}

export default Blog
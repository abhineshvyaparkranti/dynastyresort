// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
// import { jarallax } from 'jarallax';
// import { getFacilities } from '../../api/FacilitiesApi';
 
 

// function FacilitiesSeven() {

      

//      useEffect(() => {
//         getFacilities().then(data => {
           
//           console.log("About us get api of facilities data============>", data);
//         });
//       }, []);


//     useEffect(() => {
//                 function isMobileDevice() {
//                     return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//                 }
                
//                 if (!isMobileDevice()) {
//                     document.querySelectorAll('.jarallax').forEach(element => {
//                         jarallax(element, {});
//                     });
//                 } else {
//                     console.log('Jarallax skipped on mobile devices');
//                 }
                
//             }, []);
//     return (
//         <>
//             {/* our facility */}
//             <div className="rts__section facility__area is__about has__background has__shape">
//                 <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
//                     <img src="/assets/images/pages/about-shape.svg" alt="" />
//                 </div>
//                 <div className="container">
//                     <div className="row g-5 align-items-center">
//                         <div className="col-lg-6">
//                             <div className="facility__content">
//                                 <div className="section__content__left">
//                                     <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                         Facilities 
//                                     </span>
//                                     <h2 className="content__title h2 lh-1">Hotel Facilities</h2>
//                                 </div>
//                                 <div className="row mt-20 g-5 wow fadeInUp" data-wow-delay=".5s">
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/bed.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     Varied types of rooms, from standard to luxury suites,
//                                                     equipped with essentials like beds.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/security.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">24-Hour Security</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     On-site security personnel and best surveillance. from
//                                                     standard to luxury suites,Secure storage for valuables.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/gym.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">Fitness Center</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     Equipped with exercise machines and weights.Offering
//                                                     massages, facials, and other treatments.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/swimming-pool.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">Swimming Pool</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     Indoor or outdoor pools for leisure or exercise.Offering
//                                                     massages, facials, and other treatments
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="facility__image jara-mask-3 jarallax">
//                                 <img
//                                     height={765}
//                                     width={605}
//                                     className="jarallax-img"
//                                     src="/assets/images/index-3/facility.webp"
//                                     alt=""
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* our facility end */}
//         </>

//     )
// }

// export default FacilitiesSeven
  
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jarallax } from 'jarallax';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getFacilities } from '../../api/getFacilities';

const ITEMS_PER_PAGE = 4;

const cleanHTML = (htmlString) => {
    if (typeof htmlString !== 'string') return '';

    try {
        const decodedString = new DOMParser().parseFromString(htmlString, 'text/html').body.textContent;
        const strippedText = new DOMParser().parseFromString(decodedString, 'text/html').body.textContent;
        return strippedText.trim();
    } catch (error) {
        console.error("Error in cleanHTML:", error);
        return htmlString;
    }
};

function FacilitiesSeven() {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [facilityBanner, setFacilityBanner] = useState(null);  

    useEffect(() => {
        setLoading(true);
        getFacilities(currentPage)
            .then((response) => {
                const facilityData = response?.facility?.data;
                if (facilityData?.length) {
                    setFacilities(facilityData);
                    setFacilityBanner(response?.facility_banner);  
                    setTotalPages(response.facility.last_page);
                    console.log("facilities data ============>", response.facility)
                } else {
                    setFacilities([]);
                    setTotalPages(1);
                }
            })
            .catch((error) => {
                console.error('Error fetching facilities:', error);
                setFacilities([]);
            })
            .finally(() => setLoading(false));
    }, [currentPage]);

    useEffect(() => {
        if (!/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.querySelectorAll('.jarallax').forEach((element) => {
                jarallax(element, {});
            });
        }
    }, []);

    const renderSkeletonCards = () => {
        return Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
            <div className="col-lg-6 col-md-6" key={idx}>
                <div className="card rts__card no-border is__home__three">
                    <div className="card-body">
                        <div className="icon">
                            <Skeleton circle width={50} height={50} />
                        </div>
                        <h6 className="card-title h6 mb-15">
                            <Skeleton width={`60%`} />
                        </h6>
                        <p className="card-text">
                            <Skeleton count={3} />
                        </p>
                    </div>
                </div>
            </div>
        ));
    };

    const renderFacilityCards = () => {
        if (loading) return renderSkeletonCards();
        if (!facilities.length) return <div className="text-center">No facilities available.</div>;

        return facilities.map((facility, index) => {
            const description = cleanHTML(facility.description);
            return (
                <div className="col-lg-6 col-md-6" key={facility.id || index} style={{
                        transition: 'all 0.4s ease',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        height: '100%',
                        position: 'relative',
                        borderBottom: '3px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                        // Scale and shadow effect
                        e.currentTarget.style.transform = 'scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                        
                        // Add colorful border bottom
                        e.currentTarget.style.borderBottom = '3px solid #3498db';
                        
                        // Create and add color overlay
                        if (!e.currentTarget.querySelector('.card-color-overlay')) {
                        const overlay = document.createElement('div');
                        overlay.className = 'card-color-overlay';
                        overlay.style.position = 'absolute';
                        overlay.style.top = '0';
                        overlay.style.left = '0';
                        overlay.style.width = '100%';
                        overlay.style.height = '100%';
                        overlay.style.background = 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)';
                        overlay.style.opacity = '0';
                        overlay.style.transition = 'opacity 0.5s ease';
                        overlay.style.pointerEvents = 'none';
                        overlay.style.zIndex = '1';
                        e.currentTarget.appendChild(overlay);
                        
                        // Fade in overlay
                        setTimeout(() => {
                            overlay.style.opacity = '1';
                        }, 10);
                        } else {
                        e.currentTarget.querySelector('.card-color-overlay').style.opacity = '1';
                        }
                        
                        // Enhance card title with color effect (if exists)
                        const cardTitle = e.currentTarget.querySelector('.card-title, h3, h4, h5');
                        if (cardTitle) {
                        cardTitle.style.transition = 'all 0.4s ease';
                        cardTitle.style.color = '#3498db';
                        cardTitle.style.textShadow = '0 2px 5px rgba(52, 152, 219, 0.3)';
                        }
                        
                        // Add subtle glow to icons (if exist)
                        const icons = e.currentTarget.querySelectorAll('i, svg');
                        icons.forEach(icon => {
                        icon.style.transition = 'all 0.4s ease';
                        icon.style.color = '#9b59b2';
                        icon.style.filter = 'drop-shadow(0 0 3px rgba(155, 89, 182, 0.5))';
                        });
                        
                        // Add subtle color to all buttons within card
                        const buttons = e.currentTarget.querySelectorAll('button, .btn');
                        buttons.forEach(button => {
                        button.style.transition = 'all 0.4s ease';
                        button.style.backgroundColor = '#3498db';
                        button.style.borderColor = '#3498db';
                        button.style.color = '#ffffff';
                        });
                        
                        // Add a colorful highlight to the card header (if exists)
                        const cardHeader = e.currentTarget.querySelector('.card-header');
                        if (cardHeader) {
                        cardHeader.style.transition = 'all 0.4s ease';
                        cardHeader.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
                        cardHeader.style.borderLeftColor = '#3498db';
                        cardHeader.style.borderLeftWidth = '3px';
                        cardHeader.style.borderLeftStyle = 'solid';
                        }
                        
                        // Make card footer more vibrant (if exists)
                        const cardFooter = e.currentTarget.querySelector('.card-footer');
                        if (cardFooter) {
                        cardFooter.style.transition = 'all 0.4s ease';
                        cardFooter.style.backgroundColor = 'rgba(155, 89, 182, 0.05)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        // Reset scale and shadow
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderBottom = '3px solid transparent';
                        
                        // Fade out and remove overlay
                        const overlay = e.currentTarget.querySelector('.card-color-overlay');
                        if (overlay) {
                        overlay.style.opacity = '0';
                        setTimeout(() => {
                            overlay.remove();
                        }, 500);
                        }
                        
                        // Reset card title color
                        const cardTitle = e.currentTarget.querySelector('.card-title, h3, h4, h5');
                        if (cardTitle) {
                        cardTitle.style.color = '';
                        cardTitle.style.textShadow = 'none';
                        }
                        
                        // Reset icon styles
                        const icons = e.currentTarget.querySelectorAll('i, svg');
                        icons.forEach(icon => {
                        icon.style.color = '';
                        icon.style.filter = 'none';
                        });
                        
                        // Reset button styles
                        const buttons = e.currentTarget.querySelectorAll('button, .btn');
                        buttons.forEach(button => {
                        button.style.backgroundColor = '';
                        button.style.borderColor = '';
                        button.style.color = '';
                        });
                        
                        // Reset card header styles
                        const cardHeader = e.currentTarget.querySelector('.card-header');
                        if (cardHeader) {
                        cardHeader.style.backgroundColor = '';
                        cardHeader.style.borderLeftColor = '';
                        cardHeader.style.borderLeftWidth = '';
                        cardHeader.style.borderLeftStyle = '';
                        }
                        
                        // Reset card footer styles
                        const cardFooter = e.currentTarget.querySelector('.card-footer');
                        if (cardFooter) {
                        cardFooter.style.backgroundColor = '';
                        }
                    }}>
                    <div className="card rts__card no-border is__home__three" >
                        <div className="card-body">
                            <div className="icon">
                                <img
                                    src={facility.icon || 'N/A'}
                                    className="rounded-circle"
                                    style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                    alt="icon"
                                />
                            </div>
                            <Link to="#">
                                <h6 className="card-title h6 mb-15">{facility.title || 'N/A'}</h6>
                            </Link>
                            <p className="card-text">
                                {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderPagination = () => {
        if (totalPages <= 1) return null;

        return (
            <div className="text-center mt-4">
                <button
                    className="btn btn-sm btn-outline-dark mx-1"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`btn btn-sm mx-1 ${currentPage === i + 1 ? 'btn-dark' : 'btn-outline-dark'}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="btn btn-sm btn-outline-dark mx-1"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        );
    };

    return (
        <div className="rts__section facility__area is__about has__background has__shape">
            <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
                <img src="/assets/images/pages/about-shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="facility__content">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">Facilities</span>
                                <h2 className="content__title h2 lh-1">Hotel Facilities</h2>
                            </div>
                            <div className="row mt-20 g-5 wow fadeInUp" data-wow-delay=".5s">
                                {renderFacilityCards()}
                            </div>
                            {renderPagination()}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {facilityBanner ? (
                        <div className="facility__image jara-mask-3 jarallax"  style={{
                    transition: 'all 0.4s ease',
                    
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                        <img
                            height={765}
                            width={605}
                            className="jarallax-img"
                            src={facilityBanner}
                            alt="Facility Banner"
                        />
                        </div>
                    ) : (
                        <Skeleton height={765} width={605} />
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacilitiesSeven;

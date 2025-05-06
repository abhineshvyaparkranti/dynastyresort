 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFacilities } from '../../api/getFacilities';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

function FacilitiesTwo() {
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
                    console.log("facilities data ============>", response);
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

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Render pagination controls
    const renderPagination = () => {
        if (totalPages <= 1) return null;

        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>
                        {i}
                    </button>
                </li>
            );
        }

       const buttonStyle = {
  background: 'white',
  color: 'black',
  border: '1px solid var(--btn-1)',
};

const activeButtonStyle = {
  background: 'var(--btn-1)',
  color: 'white',
  border: '1px solid var(--btn-1)',
};

        return (
            <nav aria-label="Facilities pagination" className="mt-4">
              <ul className="pagination justify-content-center">
  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
    <button
      className="page-link"
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      style={buttonStyle}
    >
      Previous
    </button>
  </li>
  {Array.from({ length: totalPages }, (_, i) => {
    const pageNumber = i + 1;
    const isActive = currentPage === pageNumber;

    return (
      <li key={i} className={`page-item ${isActive ? 'active' : ''}`}>
        <button
          className="page-link"
          onClick={() => handlePageChange(pageNumber)}
          style={isActive ? activeButtonStyle : buttonStyle}
        >
          {pageNumber}
        </button>
      </li>
    );
  })}

  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
    <button
      className="page-link"
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      style={buttonStyle}
    >
      Next
    </button>
  </li>
</ul>
            </nav>
        );
    };

    // Facility card skeleton loader
    const FacilityCardSkeleton = () => (
        <div className="card rts__card no-border is__home radius-6">
            <div className="card-body">
                <div className="icon" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Skeleton circle height={60} width={60} />
                </div>
                <div>
                    <Skeleton height={30} width={150} className="mb-15" />
                </div>
                <Skeleton count={3} />
            </div>
        </div>
    );

    // Render dynamic facility cards from API
    const renderFacilityCards = () => {
        if (loading) {
            return Array(ITEMS_PER_PAGE).fill().map((_, index) => (
                <div key={`skeleton-${index}`} className="col-xl-3 col-lg-6 col-md-6">
                    <FacilityCardSkeleton />
                </div>
            ));
        }

        if (facilities.length === 0) {
            return (
                <div className="col-12 text-center">
                    <p>No facilities available.</p>
                </div>
            );
        }

        return facilities.map((facility, index) => (
            <div key={facility.id || index} className="col-xl-3 col-lg-6 col-md-6">
                <div className="card rts__card no-border is__home radius-6" style={{ height: '100%' }}>
                    <div className="card-body">
                        <div className="icon" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {facility.icon ? (
                                <img 
                                    src={facility.icon} 
                                    alt={facility.title || 'Facility icon'} 
                                    style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }}
                                />
                            ) : (
                                <img 
                                    src="/assets/images/icon/bed.svg" 
                                    alt="Default facility icon" 
                                    style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }}
                                />
                            )}
                        </div>
                        <Link to={`/facility/${facility.id}`}>
                            <h6 className="card-title h6 mb-15">{facility.title || 'Facility'}</h6>
                        </Link>
                        <p className="card-text">
                            {(cleanHTML(facility.short_description) || 
                             cleanHTML(facility.description) || 
                             'Facility description not available.').split(/\s+/).slice(0, 20).join(' ')}
                            {((cleanHTML(facility.short_description) || 
                               cleanHTML(facility.description) || '').split(/\s+/).length > 20) ? '...' : ''}
                        </p>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <>
            {/* facilities */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                {loading ? (
                                    <>
                                        <Skeleton width={100} height={30} className="mx-auto mb-3" />
                                        <Skeleton width={200} height={40} className="mx-auto" />
                                    </>
                                ) : (
                                    <>
                                        <span className="h6 subtitle__icon__three mx-auto">
                                            {facilityBanner?.title || "Facilities"}
                                        </span>
                                        <h2 className="section__title">
                                            {facilityBanner?.subtitle || "Hotel Facilities"}
                                        </h2>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
                        {renderFacilityCards()}
                    </div>
                    {renderPagination()}
                </div>
            </div>
            {/* facilities end */}
        </>
    );
}

export default FacilitiesTwo;
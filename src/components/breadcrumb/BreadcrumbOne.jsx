// import React, { useEffect } from 'react'
// import WOW from 'wowjs';

// function BreadcrumbOne({ title, description, bgImage }) {
//     useEffect(() => {
//         const wow = new WOW.WOW(); // Properly initialize WOW.js
//         wow.init();
//     }, []);
//     return (
//         <>
//             {/* page header */}
//             <div
//                 className="rts__section page__hero__height page__hero__bg"
//                 style={{ backgroundImage: `url(${bgImage || '/assets/images/pages/header__bg.webp'})` }}
//             >
//                 <div className="container">
//                     <div className="row align-items-center justify-content-center">
//                         <div className="col-lg-12">
//                             <div className="page__hero__content">
//                                 <h1 className="wow fadeInUp">{title}</h1>
//                                 <p className="wow fadeInUp font-sm">{description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* page header end */}
//         </>
//     )
// }

// export default BreadcrumbOne

 
import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import { getHeroBanner } from '../../api/getHeroBanner';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function BreadcrumbOne({ title, description }) {
  const [bgImage, setBgImage] = useState(null); // null initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHeroBanner()
      .then((data) => {
        if (data?.bannerData?.about_banner) {
          setBgImage(data.bannerData.about_banner);
        }
      })
      .catch((err) => {
        console.error("Error fetching banner image:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      {/* page header */}
      {loading ? (
        <div className="rts__section page__hero__height page__hero__bg">
          <Skeleton height={400} />
        </div>
      ) : (
        <div
          className="rts__section page__hero__height page__hero__bg"
          style={{ backgroundImage: `url(${bgImage || '/assets/images/pages/header__bg.webp'})` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12">
                <div className="page__hero__content">
                  <h1 className="wow fadeInUp">{title}</h1>
                  <p className="wow fadeInUp font-sm">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* page header end */}
    </>
  );
}

export default BreadcrumbOne;

 import React, { useEffect, useState } from 'react';
import { getAboutus } from '../../api/AboutusAPI';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function AboutFour() {
  const [aboutus, setAboutus] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAboutus()
      .then((data) => {
        setAboutus(data.aboutus);
      })
      .catch((err) => {
        console.error("Error fetching about us data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderImages = () => {
    if (loading) {
      return (
        <>
          <Skeleton width={450} height={474} className="mb-3" />
          <Skeleton width={365} height={385} />
        </>
      );
    }

    if (aboutus.images) {
      const images = JSON.parse(aboutus.images).slice(0, 2);
      return images.map((imgUrl, i) => (
        <div key={i} className={i === 0 ? "image__left wow fadeInUp" : "image__right wow fadeInLeft"}>
          <img
            src={imgUrl}
            alt={`about-img-${i}`}
            style={{ width: i === 0 ? '450px' : '365px', height: i === 0 ? '474px' : '385px' }}
          />
        </div>
      ));
    }

    return null;
  };

  return (
    <>
      {/* about us */}
      <div className="rts__section about is__home__four section__padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="about__images"  >
                {renderImages()}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about__content">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  About Us
                </span>

                <h2 className="font-xl wow fadeInUp">
                  {loading ? <Skeleton width={300} /> : aboutus.title}
                </h2>

                <p
                  className="font-sm mt-30 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  {loading ? (
                    <Skeleton count={4} />
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: aboutus.description }} />
                  )}
                </p>

                <div
                  className="hotel__owner__sign mt-40 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  {loading ? (
                    <Skeleton width={120} height={40} />
                  ) : (
                    <img src="/assets/images/index-4/about/sign.webp" alt="sign" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us end */}
    </>
  );
}

export default AboutFour;

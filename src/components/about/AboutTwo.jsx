 import React, { useEffect, useState } from 'react';
import { jarallax } from 'jarallax';
import { getAboutus } from '../../api/AboutusAPI';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function AboutTwo() {
    const [aboutus, setAboutus] = useState({});
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        getAboutus()
            .then((data) => {
                setAboutus(data.aboutus);
                console.log("about us company============>", data.aboutus);
            })
            .catch((err) => {
                console.error("Error fetching about us data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (!/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {});
            });
        } else {
            console.log('Jarallax skipped on mobile devices');
        }
    }, []);

    const getTrimmedDescription = (htmlString) => {
        const plainText = new DOMParser().parseFromString(htmlString || '', 'text/html').body.textContent || '';
        const words = plainText.split(/\s+/);
        const preview = words.slice(0, 70).join(' ');
        return preview + (words.length > 70 ? '...' : '');
    };

    return (
        <div className="rts__section about__area is__home__one section__padding">
            <div className="section__shape">
                <img src="/assets/images/about/section__shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="content">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">About Us</span>

                            <h2 className="content__title wow fadeInUp">
                                {loading ? <Skeleton width={300} /> : aboutus.title}
                            </h2>

                            <div className="wow fadeInUp" data-wow-delay=".3s">
                                {loading ? (
                                    <Skeleton count={5} />
                                ) : (
                                    <>
                                        {!showFullDescription ? (
                                            <p>{getTrimmedDescription(aboutus.description)}</p>
                                        ) : (
                                            <span dangerouslySetInnerHTML={{ __html: aboutus.description }} />
                                        )}

                                        {aboutus.description && (
                                            <button
                                                className="theme-btn btn-style fill no-border mt-3"
                                                onClick={() => setShowFullDescription(!showFullDescription)}
                                            >
                                                {showFullDescription ? 'Show Less' : 'See More'}
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="image">
                            <div className="position-relative wow fadeInUp" data-wow-delay=".3s">
                                <div className="jara-mask-1 jarallax image-height"  style={{
                    transition: 'all 0.4s ease',
                    position: 'relative',
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
                                   {!loading && aboutus.images && (() => {
                                    try {
                                        const imageList = JSON.parse(aboutus.images);
                                        return (
                                            <img
                                                src={imageList[0]} // or any image index you prefer
                                                className="jarallax-img"
                                                alt="about image"
                                            />
                                        );
                                    } catch (e) {
                                        console.error("Invalid image JSON format:", e);
                                        return null;
                                    }
                                })()}

                                </div>
                            </div>
                            <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon radius-10 center-item">
                                    <i className="flaticon-people" />
                                </div>
                                <div className="content">
                                    <span className="h5">50+</span>
                                    <p>Experience Staff</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTwo;

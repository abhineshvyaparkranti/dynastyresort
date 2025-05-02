import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom';

function AboutOne() {
    useEffect(() => {
        // Check if the device is mobile
        const isMobileDevice = () => {
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

        if (!isMobileDevice()) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {
                    speed: 0.2, // Adjust speed if necessary
                });
            });
        } else {
            console.log('Jarallax skipped on mobile devices');
        }
    }, []);

    return (
        <div className="rts__section about__area is__home__main section__padding">
            <div className="section__shape d-none d-xl-block">
                <img src="/assets/images/about/section__shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="image">
                            <div className="position-relative wow fadeInUp" data-wow-delay=".3s">
                                <div className="jara-mask-1 jarallax image-height">
                                    {/* Ensure jarallax-img is present */}
                                    <img
                                        src="/assets/images/about/about-1.webp"
                                        className="jarallax-img"
                                        alt="Background"
                                    />
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
                            <div className="image__card__image wow fadeInUp">
                                <img
                                    src="/assets/images/about/about-main.webp"
                                    width={312}
                                    height={230}
                                    alt="About"
                                />
                            </div>
                        </div>
                        <div className="content">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">About Us</span>
                            <h2 className="content__title wow fadeInUp">
                                Welcome To Our Moonlit Hotel &amp; Resort
                            </h2>
                            <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                                Welcome to Bokinn, where luxury meets comfort in the heart of
                                Canada. Since 1999, we have been dedicated to providing an
                                exceptional stay for our guests, blending modern amenities with
                                timeless elegance. Our beautifully designed rooms and suites offer
                                stunning views and plush accommodations, ensuring a restful
                                retreat whether you're here for business or leisure.
                            </p>
                            <Link to="#" className="theme-btn btn-style fill no-border wow fadeInUp" data-wow-delay=".5s">
                                <span>Learn More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOne;

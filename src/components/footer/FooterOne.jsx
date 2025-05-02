import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, 
  FaYoutube, FaPinterestP, FaWhatsapp, FaTelegramPlane 
} from 'react-icons/fa';
import Newslatter from './Newslatter';


function FooterOne() {
    return (
        <>
            {/* footer style one */}
            <footer className="rts__section rts__footer is__common__footer footer__background has__shape">
                <div className="section__shape">
                    <div className="shape__1">
                        <img src="/assets/images/footer/shape-1.svg" alt="" />
                    </div>
                    <div className="shape__2">
                        <img src="/assets/images/footer/shape-2.svg" alt="" />
                    </div>
                    <div className="shape__3">
                        <img src="/assets/images/footer/shape-3.svg" alt="" />
                    </div>
                </div>
                <div className="container">
                    {/* <div className="row">
                        <div className="footer__newsletter">
                            <span className="h2">Join Our Newsletter</span>
                            <div className="rts__form">
                                <form action="#" method="post">
                                    <input
                                        type="email"
                                        name="email"
                                        id="subscription"
                                        placeholder="Enter your mail"
                                        required=""
                                    />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    <Newslatter />
                    <div className="row">
                        <div className="footer__widget__wrapper">
                            <div className="rts__widget">
                                <Link to="/">
                                    <img
                                        className="footer__logo"
                                        src="/assets/images/logo/logo.svg"
                                        alt="footer logo"
                                    />
                                </Link>
                                <p className="font-sm max-290 mt-20">
                                    Each room features plush bedding, high-quality linens, and a
                                    selection of ensure a restful night's sleep.
                                </p>
                            </div>


                              {/* <li className="navigation__menu--item has-child has-arrow">
                                                <Link to="/" className="navigation__menu--item__link">
                                                    Pages
                                                </Link>
                                                <ul className="submenu sub__style" role="menu">
                                                    <li role="menuitem">
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/resturant">Restaurant</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/gallery">Gallery</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/service">Service</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/event">Event</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/activities">Activities</Link>
                                                    </li>
                                                </ul>
                                            </li> */}
                            <div className="rts__widget">
                                <span className="widget__title">Quick Links</span>
                                <ul>
                                    <li>
                                        <Link to="/activities" aria-label="footer__link">
                                           Activities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/resturant" aria-label="footer__link">
                                            Restaurant
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="#" aria-label="footer__link">
                                            Spa &amp; Wellness
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="/offer" aria-label="footer__link">
                                            Special Offers
                                        </Link>
                                    </li> */}
                                     <li>
                                        <Link to="/blog" aria-label="footer__link">
                                             Blog
                                        </Link>
                                    </li>

                                     <li>
                                        <Link to="/contact" aria-label="footer__link">
                                             Contact Us
                                        </Link>
                                    </li>

                                     <li>
                                        <Link to="/contact" aria-label="footer__link">
                                             Terms & Conditions
                                        </Link>
                                    </li>

                                     <li>
                                        <Link to="/contact" aria-label="footer__link">
                                             Privacy Policy
                                        </Link>
                                    </li>

                                     <li>
                                        <Link to="/contact" aria-label="footer__link">
                                             Refund Cancellation Policy
                                        </Link>
                                    </li>

                                     {/* <li>
                                        <Link to="/contact" aria-label="footer__link">
                                             Terms & Conditions
                                        </Link>
                                    </li> */}

                                     
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Guest Service</span>
                                <ul>
                                    <li>24/7 Front Desk</li>
                                    <li>Parking</li>
                                    <li>Room Service</li>
                                    <li>Free Wi-Fi</li>
                                    <li>Concierge Service</li>
                                     <li>
                                        <Link to="/service" aria-label="footer__link">
                                            Our Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Contact Us</span>
                                <ul>
                                    <li>
                                        <Link aria-label="footer__contact" to="tel:+12505550199">
                                            <i className="flaticon-phone-flip" /> +12505550199
                                        </Link>
                                    </li>
                                    <li>
                                        <Link aria-label="footer__contact" to="mailto:UjJw6@example.com">
                                            <i className="flaticon-envelope" />
                                            Moonlit@gmail.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link aria-label="footer__contact" to="#">
                                            <i className="flaticon-marker" />
                                            M5T 2L9 Toronto, Canada
                                        </Link>
                                    </li>
                                </ul>

                               {/* Social Media Icons */}
                            <div className="d-flex flex-wrap gap-3 mt-4"  >
                                <Link aria-label="facebook" to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF style={{color: 'grey'}} size={20} />
                                </Link>
                                <Link aria-label="instagram" to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram style={{color: 'grey'}} size={20} />
                                </Link>
                                <Link aria-label="twitter" to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter style={{color: 'grey'}} size={20} />
                                </Link>
                                <Link aria-label="linkedin" to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn style={{color: 'grey'}} size={20} />
                                </Link>
                                <Link aria-label="youtube" to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube style={{color: 'grey'}} size={20} />
                                </Link>
                                
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__text">
                    <div className="container">
                        <div className="row">
                            <div className="copyright__wrapper d-flex flex-column justify-content-center align-items-center text-center py-3">
                                <p className="mb-0">
                                    Copyright © {new Date().getFullYear()} Moonlit. All rights reserved.
                                </p>
                                {/* <div className="footer__social__link">
                                    <Link to="#" aria-label="footer__social" className="link__item">
                                        Facebook
                                    </Link>
                                    <Link to="#" aria-label="footer__social" className="link__item">
                                        Linkedin
                                    </Link>
                                    <Link to="#" aria-label="footer__social" className="link__item">
                                        Twitter
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer style one end */}
        </>

    )
}

export default FooterOne
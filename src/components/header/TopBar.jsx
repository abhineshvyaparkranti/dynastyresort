import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-md-6">
                            <div className="social__links">
                                <Link className="link__item gap-10" to="callto:#">
                                    <i className="flaticon-phone-flip" /> +12505550199
                                </Link>
                                <Link className="link__item gap-10" to="mailto:#">
                                    <i className="flaticon-envelope" /> moonlit@gmail.com
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="location">
                                <Link className="link__item gap-10" to="/">
                                    <i className="flaticon-marker" />
                                    280 Augusta Avenue, M5T 2L9 Toronto, Canada
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopBar
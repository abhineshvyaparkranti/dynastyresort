import React from 'react'
import { Link } from 'react-router-dom';

function RoomCardOne (props) {
    const { roomID, roomImage, roomTitle, roomPrice } = props;
    return (
        <div className="room__slide__box radius-6">
            <div className="room__thumbnail jara-mask-2 jarallax">
                <img
                    height={585}
                    width={420}
                    className="radius-6 jarallax-img"
                    src={`/assets/images/room/${roomImage}`}
                    alt=""
                />
            </div>
            <div className="room__content">
                <Link to={`/room/${roomID}`} className="room__title">
                    <h5>{roomTitle ? roomTitle : 'The Ritz-Carlton'}</h5>
                </Link>
                <div className="room__content__meta">
                    <span>
                        <i className="flaticon-construction" /> 35 sqm
                    </span>
                    <span>
                        <i className="flaticon-user" />2 Person
                    </span>
                </div>
                <span className="h4 rent mb-0 mt-15 d-block">{roomPrice ? roomPrice : '100$'}</span>
            </div>
        </div>
    )
}

export default RoomCardOne
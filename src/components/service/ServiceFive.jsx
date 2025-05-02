 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getServiceFacilities } from '../../api/getServiceFacilities';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ServiceFive() {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getServiceFacilities()
            .then((data) => {
                if (data?.allFacility) {
                    setFacilities(data.allFacility);
                }
            })
            .catch((err) => {
                console.error("Error fetching facilities:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="rts__section section__padding">
            <div className="container">
                <div className="row">
                    <div className="service__list">
                        {loading ? (
                            Array(6).fill(0).map((_, i) => (
                                <div className="service__item" key={i}>
                                    <Skeleton height={40} width={40} />
                                    <Skeleton height={20} width={120} style={{ margin: '10px 0' }} />
                                    <Skeleton count={3} />
                                </div>
                            ))
                        ) : (
                            facilities.map((facility) => (
                                <div className="service__item" key={facility.id}>
                                    <div className="service__item__icon">
                                        {facility.icon?.endsWith('.svg') || facility.icon?.endsWith('.webp') ? (
                                            <img
                                                src={facility.icon}
                                                alt={facility.title}
                                                width={40}
                                                height={40}
                                            />
                                        ) : (
                                            <i className="flaticon-placeholder" />
                                        )}
                                    </div>
                                    <Link to="#" className="h6">{facility.title}</Link>
                                    <p dangerouslySetInnerHTML={{ __html: facility.description }} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceFive;

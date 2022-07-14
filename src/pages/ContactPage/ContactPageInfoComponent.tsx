import React from 'react';
import contactimg from '../../images/contact/bg.png';
import { Email } from '../../shared/Icons/Email';
import { Phone } from '../../shared/Icons/Phone';

export const ContactPageInfoComponent: React.FC = () => (
    <>
        <div className="d-flex flex-wrap justify-content-center fs-4">
            <div>
                <img className="w-100 p-2" src={contactimg} alt="Contact us" />
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex p-2">
                        <p>
                            <Email />
                            &nbsp;&nbsp;
                        </p>
                        <a
                            className="fs-4 fw-bold"
                            href="mailto:someone@yoursite.com"
                        >
                            vermontgreenmagic@gmail.com
                        </a>
                    </div>
                    <div className="d-flex">
                        <p>
                            <Phone />
                            &nbsp;&nbsp;
                        </p>
                        <p className="fs-4 fw-bold">+1 (802)-272-9247</p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

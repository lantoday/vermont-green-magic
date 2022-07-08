import React from 'react';
import Image from 'react-bootstrap/Image';
import './GalleryPageComponent.scss';
import Gallery01 from '../../images/gallery/gallery01.png';
import Gallery02 from '../../images/gallery/gallery02.png';
import Gallery03 from '../../images/gallery/gallery03.png';
import Gallery04 from '../../images/gallery/gallery04.png';
import Gallery05 from '../../images/gallery/gallery05.png';
import Gallery06 from '../../images/gallery/gallery06.png';
import Gallery07 from '../../images/gallery/gallery07.png';
import Gallery08 from '../../images/gallery/gallery08.png';
import Gallery09 from '../../images/gallery/gallery09.png';
import Gallery10 from '../../images/gallery/gallery10.png';
import Gallery11 from '../../images/gallery/gallery11.png';
import Gallery12 from '../../images/gallery/gallery12.png';
import Gallery13 from '../../images/gallery/gallery13.png';
import Gallery14 from '../../images/gallery/gallery14.png';
import Gallery15 from '../../images/gallery/gallery15.png';

import Gallery17 from '../../images/gallery/gallery17.png';
import Gallery18 from '../../images/gallery/gallery18.png';

export const GalleryPageComponent: React.FC = () => (
    <>
        <p className="page_title">
            <span className="content_purple fw-bold">Vermont&nbsp;</span>
            <span className="content_green fw-bold">Green&nbsp;</span>
            <span className="content_purple fw-bold">Magic&nbsp;</span>
            <span className="fw-bold">Gallery</span>
        </p>
        <div className="p-3">
            <div>
                <Image
                    src={Gallery18}
                    fluid
                    alt="Gallery image"
                    className="w-100 p-1"
                />
                <div>
                    <Image
                        src={Gallery01}
                        fluid
                        alt="Gallery image"
                        className="w-50 p-1"
                    />
                    <Image
                        src={Gallery03}
                        fluid
                        alt="Gallery image"
                        className="w-50 p-1"
                    />
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <Image
                        src={Gallery02}
                        fluid
                        alt="Gallery image"
                        className="p-1"
                    />
                </div>
                <div className="d-flex p-1">
                    <Image
                        src={Gallery04}
                        fluid
                        alt="Gallery image"
                        className="w-50 p-1"
                    />
                    <Image
                        src={Gallery05}
                        fluid
                        alt="Gallery image"
                        className="w-50 p-1"
                    />
                </div>
            </div>

            <div>
                <Image
                    src={Gallery06}
                    fluid
                    alt="Gallery image"
                    className="w-50 p-1"
                />
                <Image
                    src={Gallery07}
                    fluid
                    alt="Gallery image"
                    className="w-50 p-1"
                />
            </div>
            <Image
                src={Gallery17}
                fluid
                alt="Gallery image"
                className="w-100 p-1"
            />

            <div>
                <Image
                    src={Gallery10}
                    fluid
                    alt="Gallery image"
                    className="w-50 p-1"
                />
                <Image
                    src={Gallery11}
                    fluid
                    alt="Gallery image"
                    className="w-50 p-1"
                />
            </div>

            {/*  */}
            <Image
                src={Gallery09}
                fluid
                alt="Gallery image"
                className="w-100 p-1"
            />
            <div>
                <Image
                    src={Gallery15}
                    fluid
                    alt="Gallery image"
                    className="w-50 p-1"
                />
                <Image
                    src={Gallery13}
                    fluid
                    alt="Gallery image"
                    className="w-50 p-1"
                />
            </div>

            <div className="d-flex w-100">
                <div>
                    <Image
                        src={Gallery12}
                        fluid
                        alt="Gallery image"
                        className="p-1"
                    />
                </div>
                <div>
                    <Image
                        src={Gallery08}
                        fluid
                        alt="Gallery image"
                        className="w-50 p-1"
                    />
                    <Image
                        src={Gallery14}
                        fluid
                        alt="Gallery image"
                        className="w-50 p-1"
                    />
                </div>
            </div>
        </div>
    </>
);

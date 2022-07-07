import React from 'react';
import { Carousel } from 'react-bootstrap';
import heading01 from '../../images/homepage/heading1.png';
import heading02 from '../../images/homepage/heading2.png';
import heading03 from '../../images/homepage/heading3.png';
import heading04 from '../../images/homepage/heading4.png';
import heading05 from '../../images/homepage/heading5.png';

export const CarouselComponent: React.FC = () => (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={heading01}
                    alt="Vermont Green Magic"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={heading02}
                    alt="The VGM Family"
                />

                <Carousel.Caption>
                    <h3 className="fw-bold">The VGM Family</h3>
                    <p className="fs-lg fw-bold">
                        Vermont Green Magic is a family-owned CBD business
                        located in the foothills of central Vermont. All our
                        products are handcrafted in small batches from our very
                        own hemp plants. ~Full Spectrum ~ Exceptional Quality~
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={heading03}
                    alt="Testimonials"
                />

                <Carousel.Caption>
                    <h3 className="title_blue">Testimonials</h3>
                    <p className="title_blue text-start">
                        “What do you put in this stuff? It really is magic!” --
                        Chris P.
                    </p>
                    <p className="title_blue text-start">
                        “I take the therapeutic oil wherever I go. Wouldn’t go
                        away without it.” --Karen M.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={heading05}
                    alt="How our products been made"
                />

                <Carousel.Caption>
                    <h3 className="title_blue">
                        Vibrant Plants + Whole Extraction = Living Products
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={heading04}
                    alt="View our products"
                />

                <Carousel.Caption>
                    <a
                        type="button"
                        className="btn btn_view_product"
                        href="./#/productlist"
                    >
                        View our products
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
);

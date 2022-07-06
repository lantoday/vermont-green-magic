import React from 'react';
import './FooterComponent.scss';
import { Twitter } from '../Icons/Twitter';
import { Facebook } from '../Icons/Facebook';
import { Instagram } from '../Icons/Instagram';

export const FooterComponent: React.FC = () => (
    <>
        <hr className="footer_breakline" />
        <div className="footer_container">
            <p className="text-start m-1 opacity-50 fw-bold">Follow us on:</p>
            {/* TODO Need to get correct link */}
            <div className="d-flex justify-content-between pb-3">
                <div>
                    <a
                        href="https://twitter.com/coderlan_?ref_src=twsrc%5Etfw"
                        className="twitter-follow-button footer_content"
                        data-show-count="false"
                        title="Click to follow us on Twitter"
                    >
                        <Twitter />
                    </a>
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    ></script>
                    <a
                        rel="nofollow noopener noreferrer"
                        data-shared="sharing-facebook-455"
                        className="footer_content"
                        href="https://vermontgreenmagic.com/?share=facebook&amp;nb=1"
                        target="_blank"
                        title="Click to follow us on Facebook"
                    >
                        <Facebook />
                    </a>

                    <a
                        rel="nofollow noopener noreferrer"
                        data-shared="sharing-facebook-455"
                        className="footer_content"
                        href="https://vermontgreenmagic.com/?share=facebook&amp;nb=1"
                        target="_blank"
                        title="Click to follow us on Facebook"
                    >
                        <Instagram />
                    </a>
                </div>
                <p className="text-end fw-bold fst-italic opacity-50">
                    Vermont Green Magic
                </p>
            </div>
        </div>
    </>
);

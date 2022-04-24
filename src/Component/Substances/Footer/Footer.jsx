import React from 'react';
import "./Footer.css"
import {ReactComponent as Picture} from "../../../Assets/icon/perm_media.svg";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="FootUpper">
                <div className="FootUpperContent">
                    <div className="FooterContacts">
                        <p className="FooterModusVersus"><span className="UpperCaseBold">MODUS</span>versus</p>
                        <p className="FooterContactsText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in
                            adipiscing et, interdum nec.</p>
                        <p className="FooterContactsPhone">Phone: <span className="FooterAddress">182 2569 5896</span>
                        </p>
                        <p className="FooterContactsEmail">e-mail: <span
                            className="FooterAddress">info@modu.versus</span></p>

                    </div>
                    <div className="FooterCompanies">
                        <ul className="WhiteSmallText">
                            <li className="whiteLiMarker">About</li>
                            <li className="whiteLiMarker">FAQ</li>
                            <li className="whiteLiMarker">Contact</li>
                            <li className="whiteLiMarker">Terms</li>
                            <li className="whiteLiMarker">Privacy</li>
                            <li className="whiteLiMarker">Testimonials</li>
                        </ul>
                    </div>
                    <div className="FooterCommunity">
                        <ul className="WhiteSmallText">
                            <li className="whiteLiMarker">Blog</li>
                            <li className="whiteLiMarker">Forum</li>
                            <li className="whiteLiMarker">Support</li>
                            <li className="whiteLiMarker">Newsletter</li>
                        </ul>
                    </div>
                    <div className="FooterBlog">
                        <div className="FooterBlogItem">
                            <div className="FooterBlogItemPic"><Picture/></div>
                            <div className="FooterBlogItemText">
                                <p className="FooterBlogItemTextPost WhiteSmallText">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing
                                    elit</p>
                                <p className="FooterBlogItemTextDate">26 May, 2013</p>
                            </div>
                        </div>
                        <div className="FooterBlogItem">
                            <div className="FooterBlogItemPic"><Picture/></div>
                            <div className="FooterBlogItemText">
                                <p className="FooterBlogItemTextPost WhiteSmallText">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing
                                    elit</p>
                                <p className="FooterBlogItemTextDate">26 May, 2013</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="FootLower">
                <div className="FootLowerContent">
                    <p className="FootLowerSince"> 2013 ModusVersus</p>
                    <div className="FootLowerMedia"></div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
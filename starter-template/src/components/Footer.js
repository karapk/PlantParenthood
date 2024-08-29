import React from 'react';
import Image from 'next/image';
import {assets} from "../../public/assets/assets";

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='footer-logo'>
                        <h2>PlantParentHood</h2>
                    </div>
                    <div className="footer-social-des">
                        <p>At PlantParentHood, we believe in the joy and therapeutic power of plants. Our mission is to guide and support plant parents in nurturing their green friends, providing the best resources and community support.</p>
                        <div className="footer-social-icons">
                            <Image src={assets.facebook_icon} alt="Facebook" width={24} height={24} />
                            <Image src={assets.twitter_icon} alt="Twitter" width={24} height={24} />
                            <Image src={assets.linkedin_icon} alt="LinkedIn" width={24} height={24} />
                        </div>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-800-PLANT-LOVE</li>
                        <li>support@plantparenthood.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 PlantParentHood.com - All Rights Reserved.</p>
        </div>
    );
}

export default Footer;

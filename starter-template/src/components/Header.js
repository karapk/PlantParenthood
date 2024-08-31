// components/Header.js
import Link from 'next/link';

import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Welcome to PlantParentHood</h2>
                <p>
                    Discover the joy of nurturing your very own indoor garden. Whether you are a seasoned plant parent or just starting, PlantParentHood offers the best tips, tricks, and tools to help your plants thrive. Join our community and grow with us!
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="nav-link">
                    <Link className='link-success' href="/contactUs">Contact Us</Link>
                    </button>
                    <button className="nav-link">
                    <Link className='link-success' href="/Indoor">Indoor</Link>
                    </button>

                    <button className="nav-link">
                    <Link className='link-success' href="/Outdoor">Outdoor</Link>
                    </button>


                </div>

            </div>
        </div>
    );
};

export default Header;
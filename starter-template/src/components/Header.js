// components/Header.js

import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Welcome to PlantParentHood</h2>
                <p>
                    Discover the joy of nurturing your very own indoor garden. Whether you're a seasoned plant parent or just starting, PlantParentHood offers the best tips, tricks, and tools to help your plants thrive. Join our community and grow with us!
                </p>
                <div>
                    <button>Contact US</button> 
                    <button>Indoor</button> 
                    <button>Outdoor</button>   
                </div> 
            </div>
        </div>
    );
};

export default Header;

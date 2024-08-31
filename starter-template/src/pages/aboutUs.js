import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-us-title">About PlantParentHood</h1>
            <p className="about-us-subtitle">Nurturing the green thumb in every home.</p>

            <section className="about-us-mission">
                <div className="mission-image-container">
                    <img
                        src="header.jpg"
                        alt="PlantParentHood"
                        className="mission-image"
                    />
                </div>
                <div className="mission-text-container">
                    <h2 className="mission-title">Our Mission</h2>
                    <p className="mission-text">
                        At PlantParentHood, we believe in the joy and therapeutic power of plants. Our mission is to guide and support
                        plant parents in nurturing their green friends, providing the best resources and community support.
                        Whether you are a seasoned gardener or just starting out, we are here to help you grow.
                    </p>
                </div>
            </section>

            <section className="about-us-features">
                <h2 className="features-title">Why Choose PlantParentHood?</h2>
                <div className="features-container">
                    <div className="feature">
                        <img
                            src="expert.jpg"
                            alt="Expert Tips"
                            className="feature-image"
                        />
                        <h3 className="feature-title">Expert Tips</h3>
                        <p className="feature-text">
                            Learn from the best with our comprehensive plant care guides and tips.
                        </p>
                    </div>
                    <div className="feature">
                        <img
                            src="community.jpg"
                            alt="Community Support"
                            className="feature-image"
                        />
                        <h3 className="feature-title">Community Support</h3>
                        <p className="feature-text">
                            Join our community of plant lovers and share your experiences.
                        </p>
                    </div>
                    <div className="feature">
                        <img
                            src="shop.jpg"
                            alt="Plant Shop"
                            className="feature-image"
                        />
                        <h3 className="feature-title">Plant Shop</h3>
                        <p className="feature-text">
                            Shop for the best plants and accessories curated by our experts.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-us-team">
                <h2 className="team-title">Meet Our Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <img
                            src="caby.jpg"
                            alt="Khoi Le"
                            className="team-image"
                        />
                        <h3 className="team-name">Khoi Le</h3>
                        <p className="team-role">Developer</p>
                    </div>
                    <div className="team-member">
                        <img
                            src="caby.jpg"
                            alt="Michael Boden"
                            className="team-image"
                        />
                        <h3 className="team-name">Michael Boden</h3>
                        <p className="team-role">Developer</p>
                    </div>
                    <div className="team-member">
                        <img
                            src="caby.jpg"
                            alt="Nathaniel Saumell"
                            className="team-image"
                        />
                        <h3 className="team-name">Nathaniel Saumell</h3>
                        <p className="team-role">Developer</p>
                    </div>
                    <div className="team-member">
                        <img
                            src="caby.jpg"
                            alt="Philip Karanja"
                            className="team-image"
                        />
                        <h3 className="team-name">Philip Karanja</h3>
                        <p className="team-role">CEO</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;

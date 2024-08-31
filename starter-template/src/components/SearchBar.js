import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query) return;

        try {
            const response = await axios.get('/api/plants');
            const filteredResults = response.data.filter((plant) =>
                plant.name.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredResults);
        } catch (error) {
            console.error('Failed to fetch plants:', error);
        }
    };

    return (
        <div>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search plants, tips, or articles..."
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="search-results">
                {results.length > 0 ? (
                    <div className="card-grid">
                        {results.map((plant) => (
                            <div key={plant.id} className="plant-card-horizontal">
                                <img src={plant.image_url} alt={plant.name} className="plant-image-horizontal" />
                                <div className="plant-details-horizontal">
                                    <h3>{plant.name}</h3>
                                    <p>Type: {plant.type}</p>
                                    <p><strong>Care Instructions:</strong></p>
                                    <p>Watering: {plant.care.watering}</p>
                                    <p>Light: {plant.care.light}</p>
                                    <p>Temperature: {plant.care.temperature}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SearchBar;

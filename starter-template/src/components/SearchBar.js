import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query) return;

        try {
            const response = await axios.get(`/api/searchPlants`, {
                params: { query }
            });
            setResults(response.data);
        } catch (error) {
            console.error("Failed to fetch plants:", error);
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
                    results.map((plant) => (
                        <div key={plant.id} className="plant-card">
                            <img src={plant.image_url} alt={plant.common_name} />
                            <h3>{plant.common_name}</h3>
                            <p>{plant.scientific_name}</p>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
};

export default SearchBar;

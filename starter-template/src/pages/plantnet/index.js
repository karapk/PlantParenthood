import { useEffect, useState } from 'react';

export default function Plantnet() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch('/api/plantnet');
        if (!response.ok) throw new Error('Failed to fetch plants');
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPlants();
  }, []);

  return (
    <div className="plant-page-container">
      <h1>PlantNet</h1>
      {error && <p>Error: {error}</p>}
      <div className="plant-container">
        <div className="plant-grid">
          {plants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image_url} alt={plant.common_name} />
              <h2>{plant.common_name || 'Unknown Plant'}</h2>
              <p>Scientific Name: {plant.scientific_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

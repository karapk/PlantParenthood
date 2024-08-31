const Trefle_API_KEY = 'token=DKFEqKIfDn6thWIToT6H5py3WyRpuoyAA_L9QUCtPp0';

export default async function fetchPlants(req, res) {

  
  if (req.method === 'GET') {
    try {
      const response = await fetch(`https://trefle.io/api/v1/plants?${Trefle_API_KEY}&page=1&per_page=10`);
      const data = await response.json();
      res.status(200).json(data.data); 
    } catch (error) {
      res.status(500).json({ message: 'Error fetching plants', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
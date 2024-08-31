const Trefle_API_KEY = 'token=DKFEqKIfDn6thWIToT6H5py3WyRpuoyAA_L9QUCtPp0';

export default async function fetchPlants(req, res) {
  if (req.method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let maxResults = 1; // Default number of results

    if (url.searchParams.has('max')) {
      maxResults = Number.parseInt(url.searchParams.get('max'), 1);
    }

    // Ensure maxResults does not exceed the maximum allowed by Trefle API
    maxResults = Math.min(maxResults, 1);

    try {
      const response = await fetch(`https://trefle.io/api/v1/plants?${Trefle_API_KEY}&page=1&per_page=${maxResults}`);
      const data = await response.json();
      res.status(200).json(data.data); 
    } catch (error) {
      res.status(500).json({ message: 'Error fetching plants', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

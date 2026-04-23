import { env } from '@/config/env';

export default async function fetchPlants(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  let maxResults = 1;

  if (url.searchParams.has('max')) {
    maxResults = Number.parseInt(url.searchParams.get('max'), 10);
  }

  maxResults = Math.min(maxResults, 1);

  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${env.trefleApiKey}&page=1&per_page=${maxResults}`
    );
    const data = await response.json();
    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching plants', error: error.message });
  }
}

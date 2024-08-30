export default async function handler(req, res) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    const apiKey = '9TRnklac3FlxGscceD3ulVqxgpzkJ4NvzwijhCjmDaA';

    try {
        const trefleRes = await fetch(
            `https://trefle.io/api/v1/plants/search?token=${apiKey}&q=${query}`
        );
        const data = await trefleRes.json();

        if (trefleRes.ok) {
            res.status(200).json(data.data); // Return the relevant data
        } else {
            res.status(trefleRes.status).json({ error: data.error || 'An error occurred' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Trefle API' });
    }
}

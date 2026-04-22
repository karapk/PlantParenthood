import prisma from '@/server/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type } = req.query;

  const where = {};
  if (type === 'indoor') where.isOutdoor = false;
  if (type === 'outdoor') where.isOutdoor = true;

  try {
    const plants = await prisma.plants.findMany({ where });
    res.status(200).json(plants);
  } catch (error) {
    console.error('Error fetching plants:', error);
    res.status(500).json({ message: 'Failed to fetch plants' });
  }
}

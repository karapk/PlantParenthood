import prisma from '@/server/prisma';
import bcrypt from 'bcryptjs';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password, name } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                },
            });
            res.status(201).json({ user });
        } catch (error) {
            res.status(500).json({ error: "User already exists" });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

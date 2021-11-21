import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const entries = await prisma.posts.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
        title: entry.title,
        description: entry.description,
        content: entry.content 
      }))
    );
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.posts.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
      }
    });
    return res.status(200).json({
      id: newEntry.id.toString(),
      createdAt: newEntry.createdAt,
      updatedAt: newEntry.updatedAt,
      title: newEntry.title,
      description: newEntry.description,
      content: newEntry.content 
    });
  }

  return res.send('Method not allowed.');
}
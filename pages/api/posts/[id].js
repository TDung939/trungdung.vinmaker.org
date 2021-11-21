import prisma from '../../../lib/prisma'

export default async function handler(req, res) {

  const { id } = req.query;

  const entry = await prisma.posts.findUnique({
    where: {
      id: Number(id)
    }
  });

  if (req.method === 'GET') {
    return res.json({
        id: entry.id.toString(),
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
        title: entry.title,
        description: entry.description,
        content: entry.content 
    });
  }

  if (req.method === 'DELETE') {
    await prisma.posts.delete({
      where: {
        id: Number(id)
      }
    });

    return res.status(204).json({});
  }

//   if (req.method === 'PUT') {
//     const body = (req.body.body || '').slice(0, 500);

//     await prisma.guestbook.update({
//       where: {
//         id: Number(id)
//       },
//       data: {
//         body,
//         updated_at: new Date().toISOString()
//       }
//     });

//     return res.status(201).json({
//       ...entry,
//       body
//     });
//   }

  return res.send('Method not allowed.');
}
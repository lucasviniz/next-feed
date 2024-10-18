import { getSession, useSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { title, content, session } = req.body;

 
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session.user.email } },
    },
  });
  res.json(result);
}
import { PostDTO } from "../types/PostDTO";
import { PrismaClient } from "database";
const prisma = new PrismaClient();

export async function GetPosts() {
  const res = await prisma.post.findMany();
  const posts: PostDTO[] = [];

  for (const post of res) {
    let user = "Anonymous";

    if (!post.anonymous) {
      const result = await prisma.user.findUnique({
        where: {
          id: post.userID,
        },
        select: {
          username: true,
        },
      });

      if (result) {
        user = result.username;
      }
    }

    const postData = new PostDTO(
      post.id,
      post.anonymous,
      post.title,
      post.content,
      post.status,
      post.created_at,
      post.updated_at,
      user,
      post.picture,
      post.picture_desc,
      post.deleted_at,
      post.topic
    );

    posts.push(postData);
  }
  return posts;
}

export async function GetPostById(id: string) {
  const post = await prisma.post
    .findUnique({
      where: {
        id: id,
      },
    })
    .catch(() => {
      return null;
    });
  return post;
}

export async function CreatePost(data: any) {
  const post = await prisma.post
    .create({
      data: data,
    })
    .catch(() => {
      return null;
    });
  return post;
}

export async function UpdatePost(id: string, data: any) {
  const post = await prisma.post
    .update({
      where: {
        id: id,
      },
      data: data,
    })
    .catch(() => {
      return null;
    });
  return post;
}

export async function DeletePost(id: string) {
  const post = await prisma.post
    .delete({
      where: {
        id: id,
      },
    })
    .catch(() => {
      return null;
    });
  return post;
}

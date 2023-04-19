import { CreatePostSchema } from "../types/CreatePostSchema";
import { PostSchema } from "../types/PostSchema";
import { PrismaClient } from "database";
const prisma = new PrismaClient();

export async function GetPosts() {
  const res = await prisma.post.findMany();
  const posts: PostSchema[] = [];

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

    const postData: PostSchema = {
      id: post.id,
      anonymous: post.anonymous,
      title: post.title,
      content: post.content,
      status: post.status,
      created_at: post.created_at,
      updated_at: post.updated_at,
      authorUsername: user,
      picture: post.picture,
      picture_desc: post.picture_desc,
      deleted_at: post.deleted_at,
      topic: post.topic,
    };

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

export async function CreatePost(data: CreatePostSchema) {
  const post = await prisma.post.create({ data: data }).catch((e: Error) => {
    console.log("error", e);
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

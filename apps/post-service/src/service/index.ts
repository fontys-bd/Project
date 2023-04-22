import { Request } from "express";
import * as prisma from "../integration/index";
import { CreatePostSchema } from "../types/CreatePostSchema";

export async function GetPosts() {
  const posts = await prisma.GetPosts();

  return posts;
}

export async function GetPostsPaginated(req: Request) {
  const posts = await prisma.GetPostsPaginated(req);

  return posts;
}

export async function GetPostById(id: string) {
  const post = await prisma.GetPostById(id);

  return post;
}

export async function CreatePost(data: CreatePostSchema) {
  const now = new Date();
  const postData: CreatePostSchema = {
    ...data,
    created_at: now,
    updated_at: now,
    userID: "642abeeb6e7160c651969049",
  };

  const post = await prisma.CreatePost(postData);

  return post;
}

export async function UpdatePost(id: string, data: any) {
  const post = await prisma.UpdatePost(id, data);

  return post;
}

export async function DeletePost(id: string) {
  const post = await prisma.DeletePost(id);

  return post;
}

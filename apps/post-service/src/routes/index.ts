import { Request, Response, Router } from "express";
import * as service from "../service/index";
import { prisma } from "database";

export const postRouter = (): Router => {
  const router = Router();

  // Get all posts
  router.get("/", async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit) || 10; // Number of records per page
    const cursor = req.query.cursor; // The cursor value

    try {
      const posts = await prisma.post.findMany({
        take: limit + 1, // Fetch one more record than needed to determine if there's a next page
        cursor: cursor ? { created_at: new Date(cursor) } : undefined,
        skip: cursor ? 1 : undefined,
        orderBy: {
          created_at: "asc",
        },
        include: {
          author: {
            select: {
              username: true,
            },
          },
        },
      });

      const hasNextPage = posts.length > limit;
      if (hasNextPage) {
        posts.pop(); // Remove the extra record
      }

      res.json({
        data: posts,
        nextPageCursor: hasNextPage
          ? posts[posts.length - 1].created_at.toISOString()
          : null,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });

  // Create a post
  router.post("/", async (req, res) => {
    try {
      const post = await service.CreatePost(req.body);
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Get a post by id
  router.get("/:id", async (req, res) => {
    try {
      const post = await service.GetPostById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Update a post by id
  router.put("/:id", async (req, res) => {
    try {
      const post = await service.UpdatePost(req.params.id, req.body);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Delete a post by id
  router.delete("/:id", async (req, res) => {
    try {
      const post = await service.DeletePost(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return router;
};

import { Router } from "express";

export const userRouter = () => {
  const router = Router();

  // Static routes
  router.get("/", (req, res) => {
    return res.json({ user: "Big Jhon" });
  });

  // Dynamic routes
  router
    .route("/:id")
    .get((req, res) => {
      return res.json({ user: req.params.id });
    })
    .post((req, res) => {
      return res.json({ user: req.params.id });
    })
    .put((req, res) => {
      return res.json({ user: req.params.id });
    })
    .delete((req, res) => {
      return res.json({ user: req.params.id });
    });

  // Middleware for dynamic routes
  router.param("id", (req, res, next, id) => {
    console.log("User with ID:", id);
    next();
  });

  return router;
};

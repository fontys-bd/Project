import { Router } from "express";
import { ModifiedData } from "../service/index";
import { ModifiedDataByID } from "../service/index";

export const userRouter = () => {
  const router = Router();

  // Static routes
  router.get("/", (req, res) => {
    const sample = ModifiedData();
    console.log("routes", sample);
    return res.json(sample);
  });

  // Dynamic routes
  router
    .route("/:id")
    .get((req, res) => {
      const sample = ModifiedDataByID(req.params.id);
      return res.json(sample);
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

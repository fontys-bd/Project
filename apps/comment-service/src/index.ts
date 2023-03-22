import commentRouter from "./routes/commentRoutes";
import { createServer } from "./server";
import { log } from "logger";

const port = process.env.NEXT_PUBLIC_COMMENT_SERVICE_URL || 3004;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.use("/comment", commentRouter);

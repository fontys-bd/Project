import { CommentRouter } from "./routes";
import { createServer } from "./server";
import { log } from "logger";

const port = process.env.NEXT_PUBLIC_COMMENT_SERVICE_URL || 3004;
const endPoint = process.env.NODE_ENV === "production" ? "/" : "/comment";
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
  log(`endPoint: ${endPoint}`);
});

server.use(endPoint, CommentRouter());

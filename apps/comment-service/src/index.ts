import { CommentRouter } from "./routes";
import { createServer } from "./server";
import { log } from "logger";

const port = process.env.NEXT_PUBLIC_COMMENT_SERVICE_URL?.split(":")[2] || 3004;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.use("", CommentRouter());

import { userRouter } from "./routes/users";
import { createServer } from "./server";
import { log } from "logger";

const port = process.env.COMMENT_SERVICE_URL || 3004;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.use("/user", userRouter());

import { userRouter } from "./routes";
import { createServer } from "./server";
import { log } from "logger";

const port = process.env.NEXT_PUBLIC_USER_SERVICE_URL || 3002;
const endPoint = process.env.NODE_ENV === "production" ? "/" : "/user";
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.use(endPoint, userRouter());

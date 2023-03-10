import { userRouter } from "./routes/users";
import { createServer } from "./server";
import { log } from "logger";

const port = process.env.UPLOAD_SERVICE_URL || 3001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.use("/user", userRouter());

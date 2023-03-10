import { createServer } from "./server";
import { log } from "logger";

const port = process.env.POST_SERVICE_URL || 3003;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

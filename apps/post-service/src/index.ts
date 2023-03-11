import { createServer } from "./server";
import { log } from "logger";

const port = process.env.NEXT_PUBLIC_POST_SERVICE_URL || 3003;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

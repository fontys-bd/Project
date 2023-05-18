import { getAccessToken } from "@auth0/nextjs-auth0";
import { env } from "@/env.mjs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const token = await getAccessToken(req, res);
    res.status(200).json(token);
  }
}

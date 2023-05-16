import express from "express";
import cookieParser from "cookie-parser";

import { config } from "./config";

async function main() {
  const app = express();

  //app.set("trust proxy", true);
  app.disable('x-powered-by');
  app.use(express.json());
  app.use(cookieParser());

  app.use("/api", async (_req, res, _next) => {
    res.status(200).send("Elden Dork Online!");
  });

  app.listen(config.port, () => { console.log(`Server has started on port ${config.port}`) });
}

main();
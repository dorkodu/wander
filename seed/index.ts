import express from "express";
import cookieParser from "cookie-parser";

import { config } from "./src/config";

async function main() {
  const app = express();

  // app.set("trust proxy", true);
  app.disable('x-powered-by');
  app.use(express.json());
  app.use(cookieParser());

  app.use("/api", async (_req, res, _next) => {
    
    const requestHeaders = _req.headers;
    const query: any = {};
    const result: any = {};

    const response: any = {
      request: requestHeaders,
      query,
      result,
    };
    
    res.status(200)
    .contentType("JSON")
    .send(JSON.stringify(response));
  });



  app.get("/", async (_req, res, _next) => {
    res.status(200).send("Hello World!");
  })

  app.listen(config.port, () => { console.log(`Server has started on port ${config.port}`) });
}

main();
import cors from "@fastify/cors";
import Fastify from "fastify";
import {main} from "./routes";

const app = Fastify();

app.register(cors);
app.register(main);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on port 3333");
  });

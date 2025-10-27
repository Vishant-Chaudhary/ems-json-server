import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 10000;
server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${port}`);
});
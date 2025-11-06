const jsonServer = require("json-server");
const compression = require("compression");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

server.use(middlewares);

server.use(compression());

server.use((req, res, next) => {
  req._startAt = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - req._startAt;
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });
  next();
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  const maxBodyBytes = 5 * 1024 * 1024;
  const len = req.headers["content-length"]
    ? parseInt(req.headers["content-length"], 10)
    : 0;
  if (len > maxBodyBytes) {
    return res.status(413).json({ message: "Payload too large" });
  }
  next();
});

server.use(router);

const appServer = server.listen(PORT, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
appServer.setTimeout(120000);

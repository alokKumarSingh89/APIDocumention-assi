const jsonServer = require("json-server");

const json_server = jsonServer.create();

const db = require("./db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4001;

json_server.use(middlewares);
json_server.use(jsonServer.bodyParser);
json_server.get("/api/developer/documentation", (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const count = db.api.length;

  try {
    const document = db.api.slice((page - 1) * limit, limit * page);
    if (document.length <= 0) {
      throw new Error("No  Record Found");
    }
    res.status(200).json({ count, document });
  } catch (error) {
    res.status(300).json({ error: error.message });
  }
});

json_server.get("/api/developer/intro/:id", (req, res) => {
  const { id } = req.params;
  const apis = db.api.find((item) => String(item.id) === id);
  res.status(200).json({ ...apis });
});
json_server.get("/api/developer/guide/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const apis = db.api.find((item) => String(item.id) === id);
  res.status(200).json({ ...apis });
});
json_server.get("/api/developer/reference/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const apis = db.api.find((item) => String(item.id) === id);
  res.status(200).json({ ...apis });
});

// server.use(router);
json_server.listen(port, () => {
  console.log(`Server Runing on ${port}`);
});

require("dotenv").config();
const {
  getAll,
  getOne,
  deleted,
  update,
  create
} = require("./controllers/productCtrl");
const massive = require("massive");
const express = require("express");
const { json } = require("body-parser");

const port = 3000;
const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    // dbInstance
    //   .create_product_table()
    //   .then(resonse => {
    //     console.log(response);
    //   })
    //   .catch(e => console.log(e));
  })
  .catch(error => console.log(error));

app.get("/api/products", getAll);
app.get("/api/products/:id", getOne);
app.put("/api/products/:id", update);
app.post("/api/products", create);
app.delete("/api/products/:id", deleted);

app.listen(port, () => console.log(`Server listening on port ${port}.`));
